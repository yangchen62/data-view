import React from 'react';

export type AnyComponent<P = any> =
    | (new (props: P) => React.Component)
    | ((props: P & { children?: React.ReactNode }) => React.ReactElement<any> | null);

export type ObjectType = {
    [key: string]: any;
};
