/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {|
  id?: ?string,
  name: string,
|};

export type ModelBlogConditionInput = {|
  name?: ?ModelStringInput,
  and?: ?Array< ?ModelBlogConditionInput >,
  or?: ?Array< ?ModelBlogConditionInput >,
  not?: ?ModelBlogConditionInput,
|};

export type ModelStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type UpdateBlogInput = {|
  id: string,
  name?: ?string,
|};

export type DeleteBlogInput = {|
  id: string,
|};

export type CreatePostInput = {|
  id?: ?string,
  title: string,
  blogID: string,
|};

export type ModelPostConditionInput = {|
  title?: ?ModelStringInput,
  blogID?: ?ModelIDInput,
  and?: ?Array< ?ModelPostConditionInput >,
  or?: ?Array< ?ModelPostConditionInput >,
  not?: ?ModelPostConditionInput,
|};

export type ModelIDInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type UpdatePostInput = {|
  id: string,
  title?: ?string,
  blogID?: ?string,
|};

export type DeletePostInput = {|
  id: string,
|};

export type CreateCommentInput = {|
  id?: ?string,
  postID: string,
  content: string,
|};

export type ModelCommentConditionInput = {|
  postID?: ?ModelIDInput,
  content?: ?ModelStringInput,
  and?: ?Array< ?ModelCommentConditionInput >,
  or?: ?Array< ?ModelCommentConditionInput >,
  not?: ?ModelCommentConditionInput,
|};

export type UpdateCommentInput = {|
  id: string,
  postID?: ?string,
  content?: ?string,
|};

export type DeleteCommentInput = {|
  id: string,
|};

export type ModelBlogFilterInput = {|
  id?: ?ModelIDInput,
  name?: ?ModelStringInput,
  and?: ?Array< ?ModelBlogFilterInput >,
  or?: ?Array< ?ModelBlogFilterInput >,
  not?: ?ModelBlogFilterInput,
|};

export type ModelPostFilterInput = {|
  id?: ?ModelIDInput,
  title?: ?ModelStringInput,
  blogID?: ?ModelIDInput,
  and?: ?Array< ?ModelPostFilterInput >,
  or?: ?Array< ?ModelPostFilterInput >,
  not?: ?ModelPostFilterInput,
|};

export type ModelCommentFilterInput = {|
  id?: ?ModelIDInput,
  postID?: ?ModelIDInput,
  content?: ?ModelStringInput,
  and?: ?Array< ?ModelCommentFilterInput >,
  or?: ?Array< ?ModelCommentFilterInput >,
  not?: ?ModelCommentFilterInput,
|};

export type CreateBlogMutationVariables = {|
  input: CreateBlogInput,
  condition?: ?ModelBlogConditionInput,
|};

export type CreateBlogMutation = {|
  createBlog: ? {|
    __typename: "Blog",
    id: string,
    name: string,
    posts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        title: string,
        blogID: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateBlogMutationVariables = {|
  input: UpdateBlogInput,
  condition?: ?ModelBlogConditionInput,
|};

export type UpdateBlogMutation = {|
  updateBlog: ? {|
    __typename: "Blog",
    id: string,
    name: string,
    posts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        title: string,
        blogID: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteBlogMutationVariables = {|
  input: DeleteBlogInput,
  condition?: ?ModelBlogConditionInput,
|};

export type DeleteBlogMutation = {|
  deleteBlog: ? {|
    __typename: "Blog",
    id: string,
    name: string,
    posts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        title: string,
        blogID: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreatePostMutationVariables = {|
  input: CreatePostInput,
  condition?: ?ModelPostConditionInput,
|};

export type CreatePostMutation = {|
  createPost: ? {|
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog: ? {|
      __typename: string,
      id: string,
      name: string,
      posts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    comments: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        postID: string,
        content: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdatePostMutationVariables = {|
  input: UpdatePostInput,
  condition?: ?ModelPostConditionInput,
|};

export type UpdatePostMutation = {|
  updatePost: ? {|
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog: ? {|
      __typename: string,
      id: string,
      name: string,
      posts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    comments: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        postID: string,
        content: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeletePostMutationVariables = {|
  input: DeletePostInput,
  condition?: ?ModelPostConditionInput,
|};

export type DeletePostMutation = {|
  deletePost: ? {|
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog: ? {|
      __typename: string,
      id: string,
      name: string,
      posts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    comments: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        postID: string,
        content: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreateCommentMutationVariables = {|
  input: CreateCommentInput,
  condition?: ?ModelCommentConditionInput,
|};

export type CreateCommentMutation = {|
  createComment: ? {|
    __typename: "Comment",
    id: string,
    postID: string,
    post: ? {|
      __typename: string,
      id: string,
      title: string,
      blogID: string,
      blog: ? {|
        __typename: string,
        id: string,
        name: string,
        createdAt: any,
        updatedAt: any,
      |},
      comments: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    content: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateCommentMutationVariables = {|
  input: UpdateCommentInput,
  condition?: ?ModelCommentConditionInput,
|};

export type UpdateCommentMutation = {|
  updateComment: ? {|
    __typename: "Comment",
    id: string,
    postID: string,
    post: ? {|
      __typename: string,
      id: string,
      title: string,
      blogID: string,
      blog: ? {|
        __typename: string,
        id: string,
        name: string,
        createdAt: any,
        updatedAt: any,
      |},
      comments: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    content: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteCommentMutationVariables = {|
  input: DeleteCommentInput,
  condition?: ?ModelCommentConditionInput,
|};

export type DeleteCommentMutation = {|
  deleteComment: ? {|
    __typename: "Comment",
    id: string,
    postID: string,
    post: ? {|
      __typename: string,
      id: string,
      title: string,
      blogID: string,
      blog: ? {|
        __typename: string,
        id: string,
        name: string,
        createdAt: any,
        updatedAt: any,
      |},
      comments: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    content: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type GetBlogQueryVariables = {|
  id: string,
|};

export type GetBlogQuery = {|
  getBlog: ? {|
    __typename: "Blog",
    id: string,
    name: string,
    posts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        title: string,
        blogID: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListBlogsQueryVariables = {|
  filter?: ?ModelBlogFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListBlogsQuery = {|
  listBlogs: ? {|
    __typename: "ModelBlogConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      posts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetPostQueryVariables = {|
  id: string,
|};

export type GetPostQuery = {|
  getPost: ? {|
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog: ? {|
      __typename: string,
      id: string,
      name: string,
      posts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    comments: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        postID: string,
        content: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListPostsQueryVariables = {|
  filter?: ?ModelPostFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListPostsQuery = {|
  listPosts: ? {|
    __typename: "ModelPostConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      title: string,
      blogID: string,
      blog: ? {|
        __typename: string,
        id: string,
        name: string,
        createdAt: any,
        updatedAt: any,
      |},
      comments: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetCommentQueryVariables = {|
  id: string,
|};

export type GetCommentQuery = {|
  getComment: ? {|
    __typename: "Comment",
    id: string,
    postID: string,
    post: ? {|
      __typename: string,
      id: string,
      title: string,
      blogID: string,
      blog: ? {|
        __typename: string,
        id: string,
        name: string,
        createdAt: any,
        updatedAt: any,
      |},
      comments: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    content: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListCommentsQueryVariables = {|
  filter?: ?ModelCommentFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListCommentsQuery = {|
  listComments: ? {|
    __typename: "ModelCommentConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      postID: string,
      post: ? {|
        __typename: string,
        id: string,
        title: string,
        blogID: string,
        createdAt: any,
        updatedAt: any,
      |},
      content: string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateBlogSubscription = {|
  onCreateBlog: ? {|
    __typename: "Blog",
    id: string,
    name: string,
    posts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        title: string,
        blogID: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateBlogSubscription = {|
  onUpdateBlog: ? {|
    __typename: "Blog",
    id: string,
    name: string,
    posts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        title: string,
        blogID: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteBlogSubscription = {|
  onDeleteBlog: ? {|
    __typename: "Blog",
    id: string,
    name: string,
    posts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        title: string,
        blogID: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreatePostSubscription = {|
  onCreatePost: ? {|
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog: ? {|
      __typename: string,
      id: string,
      name: string,
      posts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    comments: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        postID: string,
        content: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdatePostSubscription = {|
  onUpdatePost: ? {|
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog: ? {|
      __typename: string,
      id: string,
      name: string,
      posts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    comments: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        postID: string,
        content: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeletePostSubscription = {|
  onDeletePost: ? {|
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog: ? {|
      __typename: string,
      id: string,
      name: string,
      posts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    comments: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        postID: string,
        content: string,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreateCommentSubscription = {|
  onCreateComment: ? {|
    __typename: "Comment",
    id: string,
    postID: string,
    post: ? {|
      __typename: string,
      id: string,
      title: string,
      blogID: string,
      blog: ? {|
        __typename: string,
        id: string,
        name: string,
        createdAt: any,
        updatedAt: any,
      |},
      comments: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    content: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateCommentSubscription = {|
  onUpdateComment: ? {|
    __typename: "Comment",
    id: string,
    postID: string,
    post: ? {|
      __typename: string,
      id: string,
      title: string,
      blogID: string,
      blog: ? {|
        __typename: string,
        id: string,
        name: string,
        createdAt: any,
        updatedAt: any,
      |},
      comments: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    content: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteCommentSubscription = {|
  onDeleteComment: ? {|
    __typename: "Comment",
    id: string,
    postID: string,
    post: ? {|
      __typename: string,
      id: string,
      title: string,
      blogID: string,
      blog: ? {|
        __typename: string,
        id: string,
        name: string,
        createdAt: any,
        updatedAt: any,
      |},
      comments: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    content: string,
    createdAt: any,
    updatedAt: any,
  |},
|};