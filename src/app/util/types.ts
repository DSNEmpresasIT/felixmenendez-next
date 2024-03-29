export interface ProductData {
  img?: string;
  name: string;
  filters: string[];
  formulacion?: string;
  isActiveSubstance?: boolean;
  specs?: {
    description?: string; 
    features?: ProductFeature;
  }
}

export interface ProductFeature {
  activeSkill?: string;
  action?: string; 
  usageRecommendations?: string;
  applicationMethod?: string; 
  dosage?: string;
  pdfFiles?: ProductsPdfFiles;
  malezas?: string; 
  cultivos?: string;
}

export interface ProductsPdfFiles {
  marbete?: boolean;
  flyer?: boolean;
  securityDataPaper?: boolean;
}

export interface NavData {
  name: string;
  filter: string;
  products: string[];
}

export enum ProductTypes {
  FERTILIZANTES = 'fertilizantes',
  FERTILIZANTES_GRANULADOS = 'Fertilizantes granulados',
  FERTILIZANTES_SOLUBLES = 'Fertilizantes solubles',
  FERTILIZANTES_LIQUIDOS = 'Fertilizantes liquidos',
  FERTILIZANTES_LIQUIDOS_HERBICIDAS = 'fertiliantes_liquidos_herbicida',
  HERBICIDAS = 'herbicidas',
  INSECTICIDAS_GENERAL = 'insecticidas',
  FUNGICIDAS = 'fungicidas',
  SEMILLA = 'semillas',
  HERMICIDAS = 'hermicidas',
}

export interface FacebookPost {
  description: string;
  icon: string;
  comments: FacebookPostComments[];
  created_time: string;
  image: FacebookPostImage;
  url: string;
  reactions: any[];
}

export interface FacebookPostComments {
  created_time: string;
  message: string;
  from: {
    name: string;
    id: string;
    picture: {
      data: {
        height: number;
        is_silhouette: boolean;
        url: string;
        width: number;
      }
    }
  }
}

export interface FacebookPostImage {
  height: number;
  src: string;
  width: number;
}

export interface BlogContextState {
 keys: Keys | undefined;
 facebookPostDetail: FacebookPost | undefined;
 facebookPostData: FacebookPost[] | undefined;
}

export interface Keys {
  FACEBOOK_TOKEN: string;
  FACEBOOK_PAGE_ID: string;
  INSTAGRAM_TOKEN?: string;
}

// SUPABASE Interfaces

export interface Product {
  id: number;
  name?: string | null;
  formulacion?: string | null;
  img?: string | null;
  created_at: Date;
  is_active_substance?: boolean | null;
  filters?: string;
  type:string | null;
  supplier?: {
    name: string;
  } | null;
  supplier_id?: number | undefined;
  unid?: string;
}

export interface Category {
  id: number;
  category?: string | null;
  created_at: Date;
}


export interface ProductSingle {
  product_id: bigint;
  description: string;
  activeSkill: string;
  action: string;
  usageRecommendations: string;
  applicationMethod: string;
  dosage: string;
  malezas: string;
  cultivos: string;
  pdffiles: string;
}
