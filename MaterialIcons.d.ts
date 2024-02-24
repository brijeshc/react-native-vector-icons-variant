import { Component } from "react";
import { Icon, IconButtonProps, IconProps, ImageSource } from "./Icon";

export const MIStyle: {
    regular: 0;
    outlined: 1;
    round: 2;
    sharp: 3;
};

export type ValueOf<T> = T[keyof T];

// borrowed from
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type MaterialIconsVariants = keyof Omit<typeof MIStyle, "regular">;

export type MaterialIconsProps = { [K in MaterialIconsVariants]?: boolean } & IconProps;

export class MaterialIconstButton extends Component<
    { [K in MaterialIconsVariants]?: boolean } & IconButtonProps,
    any
> {}

export default class MaterialIcons extends Component<MaterialIconsProps, any> {
    static getImageSource(
        name: string,
        size?: number,
        color?: string,
        miStyle?: ValueOf<typeof MIStyle>,
    ): Promise<ImageSource>;
    static getImageSourceSync(
        name: string,
        size?: number,
        color?: string,
        miStyle?: ValueOf<typeof MIStyle>,
    ): ImageSource;
    static loadFont(file?: string): Promise<void>;
    static hasIcon(name: string): boolean;
    static TabBarItem: typeof Icon.TabBarItem;
    static TabBarItemIOS: typeof Icon.TabBarItemIOS;
    static Button: typeof MaterialIconstButton;
}
