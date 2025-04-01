/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Box as Box, Image as Image, Text as Text, Slot as Slot } from "@webstudio-is/sdk-components-react";


      export const siteName = undefined;

      export const breakpoints = [{"id":"LwIMnGYV7KvvzdWGa1ngV"},{"id":"xkhW6I0DFXfI0c-04fLQq","maxWidth":991},{"id":"ToS_uK19UHrXy490cLtsj","maxWidth":767},{"id":"mq9fI1cKdlsYFjls8G_Ci","maxWidth":479}];

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Manrope-VariableFont_wght_rkx9O0NjW2_XFsz2fY7UK.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      const Page = (_props: { system: any; }) => {
let SupabaseDataLinks = useResource("SupabaseDataLinks_1")
return <Body
className={`w-body`}>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<Box
tag={"nav"}
className={`w-box c1yj4sbz c3agqir cp62vef cg6uiqu cedz2mm cawvv4x c1uwtm8m c125ht9n ciod408 c115kzbj c10am45b c1hdtk46`}>
<Link
className={`w-link`}>
<Image
loading={"eager"}
className={`w-image`} />
</Link>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box c14npjkt cngwuk1`}>
<Box
className={`w-box c1yj4sbz c3agqir cp62vef cg6uiqu cedz2mm cawvv4x c1uwtm8m c125ht9n ciod408 c115kzbj c10am45b c1hdtk46`}>
{SupabaseDataLinks?.data?.map?.((LiensItem: any, index: number) =>
<Fragment key={index}>
<Box
className={`w-box cedz2mm crrl15v cmyczec c1jczs9f cuwm55l c10fbxll c1xfwg2i`}>
<Box
className={`w-box cedz2mm cy4ctql cn650wr`}>
<Image
src={LiensItem?.favicon}
className={`w-image cwba865`} />
<Text
className={`w-text ck46aw9`}>
{LiensItem?.title}
</Text>
</Box>
<Link
href={LiensItem?.url}
className={`w-link`}>
{"Consulter"}
</Link>
</Box>
</Fragment>
)}
</Box>
</Box>
<Box
tag={"section"}
className={`w-box c14npjkt cngwuk1`}>
<Box
className={`w-box c1yj4sbz c3agqir cp62vef cg6uiqu cedz2mm cawvv4x c1uwtm8m c125ht9n ciod408 c115kzbj c10am45b c1hdtk46`} />
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box`}>
<Box
className={`w-box c1yj4sbz c3agqir cp62vef cg6uiqu cedz2mm cawvv4x c1uwtm8m c125ht9n ciod408 c115kzbj c10am45b c1hdtk46`} />
</Box>
<Link
href={"https://webstudio.is/"}
target={"_blank"}
rel={"nofollow"}
className={`w-link c1lcwqb0 c17pm5vc c1itwsoy c15bmp7d cpo73vr c1fegul2 c3b2wdu c113ehui cpk35gm ci9yaae c1iffx2w c1bx6qap c16k25yp c264rh0 c81es7v c1vmo7f4 crrn24u crh6j9x cugytiy c12jr58s c1suk7lk crrl15v clbs92w cucjs3f c10bbw32 c6pr8p c10bhcuc cl28wzs c1iv97ba c1s9uhks ckbf66q c18aw1mk c1fh758x cphn5rf c1karh7p`}>
<Image
src={"/assets/logo_r1qaJQiri6sK3rPyq-Sar.svg"}
width={20}
height={20}
alt={"Webstudio Logo"}
optimize={false}
className={`w-image c1tj8ujg c15eb64u`} />
<Text
tag={"span"}
className={`w-text`}>
{"Built with Webstudio"}
</Text>
</Link>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    