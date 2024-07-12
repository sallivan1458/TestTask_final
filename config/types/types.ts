export type Mode = 'development' | 'production';

export interface IBuildPaths{
    html:string,
    entry:string,
    output:string,

}

export interface IBuildOptions{
    port?: number,
    paths?: IBuildPaths,
    mode?: Mode;
}