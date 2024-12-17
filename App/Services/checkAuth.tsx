// import { View, Text, FlatList, TouchableOpacity } from "react-native";
// import { Fragment, useLayoutEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { UserService } from "./usersServices";
// // import { PropsWithChildren } from "shared/types/propsWithChildren";

// interface CheckAuthProps {}

// export const CheckAuth = ({ children }: CheckAuthProps) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const location = useLocation();

//   useLayoutEffect(() => {
//     UserService.getUserMe().finally(() =>
//       setTimeout(() => setIsLoading(false), 300)
//     );
//   }, [location]);

//   if (isLoading)
//     return (
//       <View>
//         <Text>Загрузка...</Text>
//       </View>
//     );

//   return (
//     <Fragment key={location.pathname + location.hash}>{children}</Fragment>
//   );
// };
