import { PostDto } from './blog.model';
import { Injectable } from '@nestjs/common';

// 파일 리포지토리, 클래스
//import { BlogFileRepository, BlogRepository } from './blog.repository';

// 몽고디비 리포지토리
import { BlogMongoRepository } from './blog.repository';

@Injectable()
export class BlogService {
    //posts = [];
    // blogRepository: BlogRepository;

    // constructor() {
    //     this.blogRepository = new BlogFileRepository();
    // }

    //constructor(private blogRepository: BlogFileRepository){}
    constructor(private blogRepository: BlogMongoRepository){}

    async getAllPosts(){
        return await this.blogRepository.getAllPost();
    }

    createPost(postDto :PostDto){
        this.blogRepository.createPost(postDto);
    }

    async getPost(id) :Promise<PostDto>{
        return await this.blogRepository.getPost(id);
    }

    delete(id){
        this.blogRepository.deletePost(id);
    }

    updatePost(id, postDto :PostDto){
        this.blogRepository.updatePost(id, postDto);
    }


}