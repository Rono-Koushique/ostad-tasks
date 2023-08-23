type Post = {
    id: number;
    title: string;
    img: string;
    short: string;
    category_id: number;
    created_at: string;
    updated_at: string;
};

type PostDetails = {
    id: string;
    list_id: string;
    title: string;
    img: string;
    content: string;
    created_at: string;
    updated_at: string;
};

type Category = {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
};
