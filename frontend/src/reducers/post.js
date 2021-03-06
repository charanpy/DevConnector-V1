import {
            GET_POST,
            POST_ERROR,
            UPDATE_LIKES,
            DELETE_POST,
            ADD_POST
} from '../action/type';

const initialstate = {
            posts: [],
            post: null,
            loading: true,
            error: {}
}

export default function (state = initialstate, action) {
            const { type, payload } = action;

            switch (type) {
                        case ADD_POST:
                                    return {
                                                ...state,
                                                posts: [...state.posts, payload],
                                                loading: false
                                    }
                        case GET_POST:
                                    return {
                                                ...state,
                                                posts: payload,
                                                loading: false
                                    }
                        case POST_ERROR:
                                    return {
                                                ...state,
                                                error: payload,
                                                loading: false
                                    }
                        case UPDATE_LIKES:
                                    return {
                                                ...state,
                                                posts: state.posts.map(post => post._id === payload.postId ? { ...post, likes: payload.likes } : post),
                                                loading: false
                                    }
                        case DELETE_POST:
                                    return {
                                                ...state,
                                                posts: state.posts.filter(post => post._id !== payload),
                                                loading: false
                                    }
                        default:
                                    return state
            }
}