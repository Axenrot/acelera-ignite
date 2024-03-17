// import { Link, RouteProp, useRoute } from "@react-navigation/native"
import React, { ReactElement, useEffect, useRef, useState } from "react"
import { Image, ImageStyle, View, ViewStyle } from "react-native"
import { Drawer } from "react-native-drawer-layout"
import { Screen, Text } from "../components"
import { isRTL } from "../i18n"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { DrawerIconButton } from "../components/DrawerIconButton"
import { AppStackScreenProps } from "app/navigators"

const logo = require("../../assets/images/logo.png")

export interface HomeScreenProps extends AppStackScreenProps<"HomeScreen"> {
  name: string
  description: string
  data: ReactElement[]
}

export function HomeScreen(_props: HomeScreenProps): ReactElement {
  const [open, setOpen] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  // const listRef = useRef<SectionList>(null)
  // const menuRef = useRef<ListViewRef<DemoListItem["item"]>>(null)
  // const route = useRoute<RouteProp<DemoTabParamList, "DemoShowroom">>()
  // const params = route.params

  // // handle Web links
  // React.useEffect(() => {
  //   if (params !== undefined && Object.keys(params).length > 0) {
  //     const demoValues = Object.values(Demos)
  //     const findSectionIndex = demoValues.findIndex(
  //       (x) => x.name.toLowerCase() === params.queryIndex,
  //     )
  //     let findItemIndex = 0
  //     if (params.itemIndex) {
  //       try {
  //         findItemIndex =
  //           demoValues[findSectionIndex].data.findIndex(
  //             (u) => slugify(u.props.name) === params.itemIndex,
  //           ) + 1
  //       } catch (err) {
  //         console.error(err)
  //       }
  //     }
  //     handleScroll(findSectionIndex, findItemIndex)
  //   }
  // }, [params])

  // const handleScroll = (sectionIndex: number, itemIndex = 0) => {
  //   listRef.current?.scrollToLocation({
  //     animated: true,
  //     itemIndex,
  //     sectionIndex,
  //   })
  //   toggleDrawer()
  // }

  useEffect(() => {
    return () => timeout.current && clearTimeout(timeout.current)
  }, [])

  const $drawerInsets = useSafeAreaInsetsStyle(["top"])

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      drawerType={"slide"}
      drawerPosition={isRTL ? "right" : "left"}
      renderDrawerContent={() => (
        <View style={[$drawer, $drawerInsets]}>
          <View style={$logoContainer}>
            <Image source={logo} style={$logoImage} />
          </View>
          <View>
            <Text>CATEGORIES MENU HERE</Text>
          </View>
        </View>
      )}
    >
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
        <DrawerIconButton onPress={() => setOpen(!open)} />

        <View>
          <Text>MAIN CONTENT HERE HERE</Text>
        </View>
      </Screen>
    </Drawer>
  )
}

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $drawer: ViewStyle = {
  backgroundColor: colors.background,
  flex: 1,
}

const $logoImage: ImageStyle = {
  height: 42,
  width: 77,
}

const $logoContainer: ViewStyle = {
  alignSelf: "flex-start",
  justifyContent: "center",
  height: 56,
  paddingHorizontal: spacing.lg,
}
