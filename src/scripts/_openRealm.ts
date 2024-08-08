// import Realm from 'realm';
// import { schema } from '../schema/schema';

// export const appID = process.env.REALM_APP_ID ?? '';
// export const email = process.env.REALM_USER ?? '';
// export const password = process.env.REALM_PASSWORD ?? '';

// export function openRealm() {
//     // console.log(appID);
//     // console.log(email);
//     // console.log(password);
//     const app = new Realm.App(appID);
//     return app
//         .logIn(
//             Realm.Credentials.emailPassword({
//                 email: email,
//                 password: password
//             })
//         )
//         .then((user) => {
//             // console.log(user);
//             return Realm.open({
//                 schema: schema,
//                 sync: {
//                     partitionValue: email,
//                     user,
//                     newRealmFileBehavior: {
//                         type: Realm.OpenRealmBehaviorType.OpenImmediately,
//                         timeOut: 1000 * 60 * 5,
//                         timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
//                     },
//                     existingRealmFileBehavior: {
//                         type: Realm.OpenRealmBehaviorType.OpenImmediately,
//                         timeOut: 1000 * 60 * 5,
//                         timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
//                     }
//                 }
//             });
//         });
// }
