export type LayoutVariant = 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6';

export interface LogicNode {
  id: string;
  label: string;
  detail: string;
}

export interface Reply {
  id: string;
  creator: string;
  signature: string;
  content: string;
  timestamp: string;
}

export type PostType = 'project' | 'experience';

export interface BasePost {
  id: string;
  type: PostType;
  creator: string;
  signature: string;
  timestamp: string;
  replies?: Reply[];
  metrics: {
    acknowledgements: number;
    audits: number;
    forks: number;
  };
}

export interface ProjectPost extends BasePost {
  type: 'project';
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  caseStudy: {
    problem: string;
    solution: string;
    impact: string;
  };
  implementation: {
    logicNodes: LogicNode[];
  };
}

export interface ExperiencePost extends BasePost {
  type: 'experience';
  content: string;
  tags?: string[];
  attachment?: string;
}

export type FeedPost = ProjectPost | ExperiencePost;

export interface Orchestrator {
  id: string;
  name: string;
  signature: string;
  specialty: string;
  status: 'active' | 'dormant';
  metrics: {
    nodesBroadcasted: number;
    forkRate: number;
  };
}

export interface WorkbenchItem {
  id: string;
  originalPost: FeedPost;
  forkedAt: string;
  status: 'review' | 'integrating' | 'archived';
  notes: string;
}
