DB 공부용

Users DB:
id: 1 username:nico

Comments DB:
id:1 text:wow! user:(Users DB:1)

get(id:1)

id:1 , text:wow! user:nico

foreign key

id:1 text:wow! user:(Users DB:5)
정보 저장전에 user DB 체크, 없는유저 ->
mysql에선 안되는데 prisma에서는 됨.
vitess는 체크 x

npm npx 차이?

npx prisma generate ?
node_modules/primsa/client/index.d.ts/user
타입스크립트로 생성

export type User = {
id: number
phone: number | null Int?
email: string | null String?
name : string
avatar: string | null
createdAt : Date
updatedAt : Date
}
