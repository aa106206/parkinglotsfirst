import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  tags: string;
  addressDetail: string;
}

export interface IItemWritePresenter {
  onChangeImageUrls: (imageUrl: string, index: number) => void;
  itemImageUrls: string[];
  onClickSubmit: (data: any) => void;
  lat: number;
  lng: number;
  address: string;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  setValue: UseFormSetValue<IFormData>;
  onChangeContents: (value: string) => void;
  formState: FormState<IFormData>;
}
