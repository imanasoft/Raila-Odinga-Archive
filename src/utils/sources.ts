import { parse } from 'yaml';

import sourcesRaw from '../../data/sources.yaml?raw';

interface SourceReliability {
  assessment?: string;
  rationale?: string;
}

interface SourceEntry {
  id: string;
  title: string;
  publisher?: string;
  url?: string;
  type?: string[];
  topics?: string[];
  critical_areas?: string[];
  license?: string;
  language?: string;
  publication_date?: string;
  retrieval_date?: string;
  archive_url?: string | null;
  reliability?: SourceReliability;
  reliability_notes?: string;
}

interface CoverageDefinition {
  minimum_sources?: number;
  source_ids?: string[];
}

interface SourcesFile {
  sources?: SourceEntry[];
  coverage_matrix?: Record<string, CoverageDefinition | undefined>;
}

const parsed = parse(sourcesRaw) as SourcesFile;
const registry = new Map<string, SourceEntry>();

for (const entry of parsed.sources ?? []) {
  registry.set(entry.id, entry);
}

const coverageMatrix = parsed.coverage_matrix ?? {};

export interface SourceMeta {
  id: string;
  title: string;
  publisher?: string;
  url?: string;
  type?: string[];
  topics?: string[];
  criticalAreas?: string[];
  license?: string;
  language?: string;
  publicationDate?: string;
  retrievalDate?: string;
  archiveUrl?: string;
  reliability?: SourceReliability;
  reliabilityNotes?: string;
}

const toMeta = (entry: SourceEntry): SourceMeta => ({
  id: entry.id,
  title: entry.title,
  publisher: entry.publisher,
  url: entry.url,
  type: entry.type,
  topics: entry.topics,
  criticalAreas: entry.critical_areas,
  license: entry.license,
  language: entry.language,
  publicationDate: entry.publication_date,
  retrievalDate: entry.retrieval_date,
  archiveUrl: entry.archive_url ?? undefined,
  reliability: entry.reliability,
  reliabilityNotes: entry.reliability_notes
});

export function getSourceMeta(id: string): SourceMeta | undefined {
  const entry = registry.get(id);
  if (!entry) return undefined;
  return toMeta(entry);
}

export function mapSourceIds(sourceIds: string[]): SourceMeta[] {
  return sourceIds
    .map((id) => getSourceMeta(id))
    .filter((value): value is SourceMeta => Boolean(value));
}

export function getAllSources(): SourceMeta[] {
  return Array.from(registry.values())
    .map((entry) => toMeta(entry))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export interface CoverageArea {
  area: string;
  minimumSources?: number;
  sourceIds: string[];
}

export function getCoverageAreas(): CoverageArea[] {
  return Object.entries(coverageMatrix)
    .map(([area, definition]) => ({
      area,
      minimumSources: definition?.minimum_sources,
      sourceIds: Array.from(new Set(definition?.source_ids ?? []))
    }))
    .sort((a, b) => a.area.localeCompare(b.area));
}
