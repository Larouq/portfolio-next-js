export interface ColorsTypes {
    primaryColor: string;
    secondaryColor: string;
}

export const initialColors: ColorsTypes = {
    primaryColor: '#76a5af',
    secondaryColor: '#cc0000',
};

interface SocialLink {
    id: string;
    label: string;
    icon: React.ReactNode;
    link: string;
}

export interface MyResume {
    name: string;
    work: string;
    experiences: string[];
}
  
export interface SocialLinks extends Array<SocialLink> {}