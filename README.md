# nest-cli를 이용한 Ioc, DI 예제 입니다.
# 설치방법
## Installation
```
npm install -g @nestjs/cli
```
## blog 프로젝트 생성
```
nest new blog
or
npx @nestjs/cli new blog
```

<p>패키지 매니저 선택창이 나오는데, npm 으로 하겠습니다.<p>
<p>.prettierrc : JS개발시 대부분 사용하는 코드 포매팅 플러그인 관련 설정파일 입니다.<p>
<p>nest-cli.json : 프로젝트, 파일 생성시 모노레포등의 기능을 사용할 때 설정합니다.</p>

<br>

# 데코레이터 @nestjs/common
- @Injectable() : 의존성 주입 "표시"
- @Controller('blog') : {서버주소}/blog 요청을 처리
- @Get(), @Post(), @Delete(), @Put() : Method
- @Param('id') var: string - Method에서 받은 데이터('id') 를 var 변수에 string 타입으로 수신
- @Body() Dto : body 데이터를 Dto 변수로 수신

<br>

# http client 플러그인
```
@server = url

GET {{server}}/blog

###
POST {{server}}/blog
Content-Type: application/json

{
  "data": "data"
}
```

<br>

# Mongoose
```
npm install @nestjs/mongoose mongoose
```
<p>nestjs에서 mongoose를 사용하기 편하게 하는 @nestjs/mongoose와 mongoose를 한번에 설치</p>
<p>RDB와 비교해 보면 아래와 같습니다.</p>
<p>Prop : 컬럼</p>
<p>Schema : 테이블</p>
<p>SchemaFactory : 테이블 obj</p>

```
@Schema()
export Class Blog {
  @Prop()
  id: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
```

<br>

# 의존성 주입
<p>
스프링을 해보신 분들이 생각하는 의존성 주입 이라고 한다면, @Injectable() 과 app.module.ts에서 주입하는 providers 두개를 왜 사용해야 하는지 의문이 들 수 있습니다.
</p>

<p>
결론부터 말하자면,
</p>

<p>
providers에 서비스를 등록 하는것은 실제 생성자에서 의존성 주입을 사용하기 위한 등록을 하는것이며,
</p>

<p>
@Injectable()을 사용하는 이유는 단순히 자동으로 주입 가능한 서비스로 "표시"하기 위한 목적밖에 없습니다. 이는 유지보수나, 소스 수정을 할 때에 가독성에 유리하게 작용됩니다.
</p>

<br><br><br><br><br><br>

출처 - Node.js 백엔드 개발자 되기 (저자 : 박승규)
