export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "ontactus",
}

export enum PageContent {
  HomePageParagraph = " Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your DreamBody Now.",
  BenefitPageParagraph = " We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
