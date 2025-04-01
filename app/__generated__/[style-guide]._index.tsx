/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, Text as Text, HtmlEmbed as HtmlEmbed, Box as Box, Image as Image, Heading as Heading, Slot as Slot, Paragraph as Paragraph, Span as Span, Blockquote as Blockquote, List as List, ListItem as ListItem, Separator as Separator, CodeText as CodeText, Bold as Bold } from "@webstudio-is/sdk-components-react";
import { Link as Link, Body as Body, RichTextLink as RichTextLink } from "@webstudio-is/sdk-components-react-router";


      export const siteName = undefined;

      export const breakpoints = [{"id":"LwIMnGYV7KvvzdWGa1ngV"},{"id":"xkhW6I0DFXfI0c-04fLQq","maxWidth":991},{"id":"ToS_uK19UHrXy490cLtsj","maxWidth":767},{"id":"mq9fI1cKdlsYFjls8G_Ci","maxWidth":479}];

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["prociono-regular_qgYmC1YupPp5P_yn2h0OO.woff","Manrope-VariableFont_wght_rkx9O0NjW2_XFsz2fY7UK.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
return <Body
id={"top"}
className={`w-body`}>
<Box
className={`w-box c14npjkt cngwuk1`}>
<Box
className={`w-box c1yj4sbz c3agqir cp62vef cg6uiqu cedz2mm cawvv4x c1uwtm8m c125ht9n c1tllvzi c1450o2a c10am45b c1hdtk46`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
className={`w-heading cjh4a4u c1j7pikj c1sokajx cwms67r cjb55v c1itli3p`}>
{"Style Guide"}
</Heading>
<Slot>
<Fragment_1>
<Text
className={`w-text`}>
{"Version 1.1"}
</Text>
</Fragment_1>
</Slot>
<Paragraph
className={`w-paragraph c9wg1t1 c10cdqnd`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box cvjg7y9 c1db3ik9 c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w c14npjkt cngwuk1 c6nfyjy crjsidz ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm c1uwtm8m c125ht9n cz23awf c1eg94aw c10am45b c1hdtk46 ch9e4y ctvh4i2 cawvv4x ciod408 c115kzbj c1yj4sbz c3agqir cp62vef cg6uiqu c6euaz6`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cvjg7y9 crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x c1fdv0dw c1fdg8cj c13p0ltt c6euaz6 co4uvvj c1scmilo cadrqh7`}>
<Box
className={`w-box c1t5yo9m c919af`}>
<Text
className={`w-text chn4jp5 cvr295v c128gx8h cwfxgmw c5oci0u c1dx06gg ccomd05 cx9xznx c113xblc c374p26 c16c75vm c1ms58n cqg69s9 ctvh4i2`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph crz16jm c1axasa4`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 c1e53flr c13yeopo coyus6w c13vi61e cjbuahq c1mwilb0 cedn70f c19mhl1z`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 c1e53flr c13yeopo coyus6w c13vi61e cjbuahq c1mwilb0 cedn70f c19mhl1z`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading cw94h2j c1j7pikj c1sokajx cwms67r`}>
{"Foreground"}
</Heading>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 cmgypg7 cd1ory3`} />
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 c16246wd c6euaz6`} />
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 c36wzjl cd1ory3`} />
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 cui205x cd1ory3`} />
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 comegi9 cd1ory3`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cw94h2j c1j7pikj c1sokajx cwms67r`}>
{"Background"}
</Heading>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--background-primary"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 c1ed1fbn c6euaz6`} />
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 c1gfbnk1 cd1ory3`} />
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--background-accent"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 c1bnn5iv cd1ory3`} />
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--background-card"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 c2qi078 cd1ory3`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cw94h2j c1j7pikj c1sokajx cwms67r`}>
{"Other"}
</Heading>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chd91ut cwfxgmw c5oci0u c1xc44bk cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf c1j6ahfl`}>
{"--focus-color"}
</Text>
<Box
className={`w-box cmuprhz c1uy8rur cu50ymt c1hor1ul cmox3w2 cgsuav2 c1lu4wj6 cgb0ap5 cd1ory3`} />
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm cjzwfg9 c125ht9n ch9e4y ctvh4i2 cawvv4x c1jczs9f cuwm55l c6euaz6 co4uvvj`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"button-group"}
</Text>
<Box
className={`w-box cedz2mm crrl15v c125ht9n c1g3vo62 c1r1juqh cii8w7t`}>
<Link
className={`w-link c8ylan4 cyq7xd c14raqim cwg3075 c1hc459s cgn4pbk c1dwxb83 c1sny1p4 c126nppl csahf1q c10bbw32 cucjs3f crrl15v clbs92w c1g3vo62 c1r1juqh cx9xznx c16ibxq2 cdyc7b0 c3swfa9 c1pspi8l c1vnyh79 c1jo18pd crijq7r c1wowzy4 cj15so1 c1ygfso2 c1hf4zrt c1gs0ocu`}>
{"button"}
</Link>
<Link
className={`w-link cogpk3l c4xj87l c14raqim cwg3075 c1hc459s cgn4pbk c1dwxb83 c1sny1p4 c126nppl csahf1q c10bbw32 cucjs3f crrl15v clbs92w c1g3vo62 c1r1juqh cx9xznx c16ibxq2 cdyc7b0 c3swfa9 c1pspi8l c1vnyh79 c1jo18pd cvsmchy c1wowzy4 cj15so1 c1ygfso2 c1hf4zrt c1gs0ocu`}>
{"is-button-secondary"}
</Link>
</Box>
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm cjzwfg9 c125ht9n ch9e4y ctvh4i2 cawvv4x c1jczs9f cuwm55l c6euaz6 co4uvvj`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"link"}
</Text>
<Link
className={`w-link c1xazf58 c9r4976 c1wowzy4 cj15so1`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
<Box
id={"elements"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading cjh4a4u c1j7pikj c1sokajx cwms67r cm0ky3c c1uflnlq c1itli3p`}>
{"Heading 1 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r c1uflnlq`}>
{"Heading 2 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cw94h2j c1j7pikj c1sokajx cwms67r c1uflnlq`}>
{"Heading 3 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1qix2dm c1j7pikj c1sokajx cwms67r`}>
{"Heading 4 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1s55z7y c1j7pikj c1sokajx cwms67r`}>
{"Heading 5 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1s55z7y c1j7pikj c1sokajx cwms67r`}>
{"Heading 6 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link c1xazf58 c9r4976 c1wowzy4 cj15so1`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines"}
</Paragraph>
<Blockquote
className={`w-blockquote cwms67r c1sgrm28 ctimqlx ccnrjoc ccl3cck`}>
<Span
className={`w-text-1 chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"list"}
</Text>
<List
className={`w-list cwms67r`}>
<ListItem
className={`w-list-item`}>
<Span
className={`w-text-1 chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"separator"}
</Text>
<Separator
className={`w-separator c1lvpcdu cp62vef c1sokajx cwms67r`} />
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text c1e53flr c13yeopo coyus6w c13vi61e cjbuahq c1mwilb0 cedn70f c19mhl1z`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"radix"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Text
className={`w-text chn4jp5 cwfxgmw c5oci0u ccpbzm7 cx9xznx cyuj5mv c1oan50s c1p38x5 c1siytfb c1fjhuyf`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box cedz2mm cawvv4x c1374gp3 c1meduk4 c1uwtm8m`}>
<Box
className={`w-box cedz2mm cawvv4x c1tp7mx2 cdawo89 ctfwx0p`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph crz16jm c1axasa4`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box cvjg7y9 c13p0ltt c1k6h0s4 cyzqao7 cl9dryg`}>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm crrl15v clbs92w ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Paragraph
className={`w-paragraph`}>
{"These are global CSS variables added in addition to Open Props."}
</Paragraph>
<CodeText
code={"--foreground-primary\n--foreground-secondary\n--foreground-accent\n--foreground-muted\n--foreground-border\n\n--background-primary\n--background-secondary\n--background-accent\n--background-card\n\n--gap-xs\n--gap-s\n--gap-m\n--gap-l\n\n--focus-color\n--focus-width\n--focus-offset\n\n--duration-default\n--easing-default"}
className={`w-code-text c1e53flr c13yeopo coyus6w c13vi61e cedn70f cp62vef c19mhl1z c6eyxmz`} />
</Box>
<Box
className={`w-box c13by9mv c62udwe ck1hmvg c146y1yd cedz2mm cjzwfg9 c125ht9n ch9e4y ctvh4i2 cawvv4x cpasfzn c1u7o5jj c6euaz6 co4uvvj`}>
<Paragraph
className={`w-paragraph`}>
<Bold
className={`w-bold-text`}>
{"Want to start with a light theme?"}
</Bold>
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Click "}
<Span
className={`w-text-1 c1e53flr c13yeopo coyus6w c13vi61e cjbuahq c1mwilb0 cedn70f c19mhl1z`}>
{"+"}
</Span>
{" in Advanced on the Global Root and paste in the following:"}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-10);\n--foreground-muted: var(--gray-7);\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-3);\n--background-accent: var(--gray-10);"}
className={`w-code-text c1e53flr c13yeopo coyus6w c13vi61e cedn70f cp62vef c19mhl1z c6eyxmz`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"nav"}
className={`w-box c33j92r cy3djba c113ehui c1yxxhnm ci1lhyt c1ntid1h c1wpzu2u cedn70f cgmrxgs c7k4cy0`}>
<Box
className={`w-box c1yj4sbz c3agqir cp62vef cg6uiqu cedz2mm cawvv4x c1uwtm8m cmyczec c1tp7mx2 cdawo89 c10am45b c1hdtk46 ciklcv1`}>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Layout"}
</Link>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Colors"}
</Link>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Links & Buttons"}
</Link>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Elements"}
</Link>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Forms"}
</Link>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Radix"}
</Link>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Utility"}
</Link>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Slots"}
</Link>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Custom"}
</Link>
<Link
className={`w-link ctnqyi0 c9r4976 c1wowzy4 cj15so1`}>
{"Notes"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c1yj4sbz c3agqir cp62vef cg6uiqu cedz2mm cawvv4x crrl15v clbs92w c1g3vo62 c1r1juqh c10am45b c1hdtk46 c14npjkt cngwuk1`}>
<Heading
tag={"h2"}
className={`w-heading c9omkx5 c1j7pikj c1sokajx cwms67r`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph c1axasa4 cx9xznx cui205x`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
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
    