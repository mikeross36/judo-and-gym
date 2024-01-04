export enum SelectedPage {
  Home = "home",
  Equipment = "equipment",
  AboutUs = "aboutus",
  Classes = "classes",
  ContactUs = "contactus",
}

export type EquipmentType = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type AboutUsType = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export type ClassType = {
  id: string;
  title: string;
  description: string;
  image: string;
};
