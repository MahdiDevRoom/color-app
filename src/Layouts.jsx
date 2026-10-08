import { Outlet } from "react-router-dom";
import { useTheme } from "@hooks/useTheme";
import { useUIStore } from "@stores/useUIStore";
import { useStatusbar } from "@hooks/useStatusbar";
import { useView } from "@hooks/useView";
import { usePage } from "@hooks/usePages";
import PushPanel from "@layouts/PushPanel";
import View from "@layouts/View";
import Appbar from "@layouts/Appbar";
import Navbar from "@layouts/Navbar";
import Main from "@layouts/Main";
import useTitle from "@hooks/useTitle";

export default () => {
  const resolvedTheme = useTheme();
  const isOpen = useUIStore((s) => s.isPanelOpen);

  useStatusbar(isOpen ? "--surface-low" : "--surface", resolvedTheme);
  useTitle();
  useView();
  usePage();
  return (
    <>
      <PushPanel active={isOpen} />
      <View>
        <Appbar />
        <Main> <Outlet /> </Main>
        <Navbar />
      </View>
    </>
  )
}
