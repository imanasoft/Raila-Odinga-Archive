export interface SourceRef {
  source_id: string;
  summary?: string;
  quote?: string;
  page?: string;
  retrieved_at?: string;
}

export interface TimelineDate {
  date: string;
  description?: string;
  approximate?: boolean;
  precision?: 'day' | 'month' | 'year';
}

export interface TimelineSpan {
  start: TimelineDate;
  end?: TimelineDate;
  precision?: 'day' | 'month' | 'year';
}

export interface TimelineDisplay {
  intensity?: 'low' | 'medium' | 'high';
  filters?: string[];
}

export interface TimelineEventEntry {
  id: string;
  slug: string;
  title: string;
  span: TimelineSpan;
  summary: string;
  description?: {
    en?: string;
  };
  location?: {
    location_id: string;
  };
  categories?: string[];
  related_people?: Array<{ id: string }>;
  related_roles?: Array<{ id: string }>;
  timeline_display?: TimelineDisplay;
  sources: SourceRef[];
  updated_at?: string;
}

export interface RoleEntry {
  id: string;
  slug: string;
  title: string;
  organization?: string;
  organization_type?: string;
  span?: TimelineSpan;
  appointing_authority?: string;
  responsibilities?: {
    en?: string;
  };
  related_events?: Array<{ id: string }>;
  holders?: Array<{
    person_id: string;
    capacity?: string;
    span?: TimelineSpan;
  }>;
  tags?: string[];
  sources: SourceRef[];
  updated_at?: string;
}

export interface ElectionEntry {
  id: string;
  slug: string;
  title: string;
  cycle?: {
    year?: number;
    round?: string;
    date?: string;
  };
  position?: string;
  jurisdiction?: string;
  coalition?: string;
  running_mates?: Array<{ id: string }>;
  platform_summary?: {
    en?: string;
  };
  results?: {
    status?: string;
    official_vote_share?: number;
    vote_margin?: number;
    turnout_percentage?: number;
    result_date?: string;
  };
  outcome?: string;
  legal_challenges?: Array<{
    summary?: string;
    span?: TimelineSpan;
    status?: string;
    sources?: SourceRef[];
  }>;
  related_events?: Array<{ id: string }>;
  policies?: Array<{ id: string }>;
  tags?: string[];
  sources: SourceRef[];
  updated_at?: string;
}

export interface PolicyEntry {
  id: string;
  slug: string;
  topic?: string;
  title: string;
  summary: string;
  narrative?: {
    en?: string;
  };
  stance_over_time?: Array<{
    span?: TimelineSpan;
    position?: string;
    context?: string;
    evidence?: Array<{ id: string }>;
    sources?: SourceRef[];
  }>;
  related_events?: Array<{ id: string }>;
  related_speeches?: Array<{ id: string }>;
  tags?: string[];
  sources: SourceRef[];
  updated_at?: string;
}

export interface SpeechEntry {
  id: string;
  slug: string;
  title: string;
  delivery?: {
    date?: string;
    venue?: string;
    city?: string;
    country?: string;
    format?: string;
  };
  summary?: string;
  abstract?: {
    en?: string;
  };
  transcript?: {
    path?: string;
    length_minutes?: number;
    format?: string;
    captioned?: boolean;
  };
  topics?: string[];
  keywords?: string[];
  media?: Array<{ id: string }>;
  related_events?: Array<{ id: string }>;
  related_policies?: Array<{ id: string }>;
  full_text?: {
    en?: string;
  };
  sources: SourceRef[];
  updated_at?: string;
}

export interface MediaEntry {
  id: string;
  slug: string;
  type: string;
  title: string;
  description?: string;
  credit?: string;
  license?: string;
  capture_date?: string;
  creator?: string;
  source_asset_url?: string;
  optimized_path?: string;
  preview_url?: string;
  embed_url?: string;
  alt_text: string;
  caption?: string;
  transcript?: string;
  duration_seconds?: number;
  related_events?: Array<{ id: string }>;
  related_policies?: Array<{ id: string }>;
  tags?: string[];
  sources: SourceRef[];
  updated_at?: string;
}

export interface HighlightEntry {
  id: string;
  slug?: string;
  title: string;
  summary: string;
  period?: string;
  theme?: string;
  links?: Array<{ label: string; href: string }>;
  topics?: string[];
  sources: SourceRef[];
}

export interface TimelineDisplayEvent {
  id: string;
  title: string;
  summary: string;
  description?: string;
  startISO: string;
  endISO?: string;
  startYear: number;
  endYear?: number;
  decadeLabel: string;
  decadeValue: number;
  topics: string[];
  intensity: 'low' | 'medium' | 'high';
  locationId?: string;
  sources: SourceRef[];
}

export interface FamilyRelationships {
  parents?: Array<{ id: string }>;
  spouses?: Array<{ id: string }>;
  children?: Array<{ id: string }>;
}

export interface FamilyMemberEntry {
  id: string;
  slug: string;
  person_id?: string;
  display_name: string;
  birth?: {
    date?: string;
    description?: string;
  };
  relationships?: FamilyRelationships;
  lineage_notes?: string;
  lineage_order?: {
    generation?: number;
    birth_order?: number;
  };
  tags?: string[];
  sources: SourceRef[];
  updated_at?: string;
}

export interface FamilyTreeNodeData {
  member: {
    id: string;
    resolvedName: string;
    lineage_notes?: string;
    birth?: {
      description?: string;
    };
    personSummary?: string;
    lineage_order?: {
      generation?: number;
      birth_order?: number;
    };
    sources: SourceRef[];
  };
  children: FamilyTreeNodeData[];
}

export interface PersonEntry {
  id: string;
  slug: string;
  name: string;
  honorific_prefix?: string;
  honorific_suffix?: string;
  also_known_as?: string[];
  nationalities?: string[];
  birth?: {
    date?: string;
    place_id?: string;
    notes?: string;
    sources?: SourceRef[];
  };
  death?: {
    status?: string;
    date?: string;
  };
  biography?: {
    en?: string;
  };
  summary?: string;
  timeline_highlights?: Array<{ id: string; label?: string }>;
  roles?: Array<{ id: string }>;
  education?: Array<{
    institution: string;
    credential?: string;
    span?: TimelineSpan;
    location_id?: string;
    sources?: SourceRef[];
  }>;
  family_links?: Array<{
    person_id: string;
    relationship_type?: string;
    notes?: string;
  }>;
  summary?: string;
  sources?: SourceRef[];
}

export interface LocationEntry {
  id: string;
  slug: string;
  name: string;
  type?: string;
  description?: string;
  geo?: {
    latitude: number;
    longitude: number;
    precision?: string;
  };
  country_code?: string;
  sources: SourceRef[];
  updated_at?: string;
}
