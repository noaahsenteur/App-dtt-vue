export interface itemPost {
    body: string;
    date: number;
    title: string;
    id: number;
}

export interface vueState {
    posts: Array<itemPost>,
    post: object,
    comments: object,
    categories: object,
}

export interface commitFunction {
    commit : Function
}

export interface commentsInterface {
    body: string,
    email: string,
    name: string,
    id: number,
    postId: number,
}

export interface routeInterface {
    path?: {},
    name?: {},
    component?: {},
}