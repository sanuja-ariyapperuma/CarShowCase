import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyle?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}

export interface SearchManufactuereProps{
    manufacturer: string
    setManufacturer: (manufacturer: string)=>void;
}