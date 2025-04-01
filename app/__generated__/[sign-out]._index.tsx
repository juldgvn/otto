/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Box as Box, Image as Image, Button as Button, Heading as Heading, Slot as Slot } from "@webstudio-is/sdk-components-react";
import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuLink as NavigationMenuLink, NavigationMenuViewport as NavigationMenuViewport } from "@webstudio-is/sdk-components-react-radix";


      export const siteName = undefined;

      export const breakpoints = [{"id":"LwIMnGYV7KvvzdWGa1ngV"},{"id":"xkhW6I0DFXfI0c-04fLQq","maxWidth":991},{"id":"ToS_uK19UHrXy490cLtsj","maxWidth":767},{"id":"mq9fI1cKdlsYFjls8G_Ci","maxWidth":479}];

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Manrope-VariableFont_wght_rkx9O0NjW2_XFsz2fY7UK.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
const system = _props.system;
let [menuValue, set$menuValue] = useVariableState<any>("")
return <Body
className={`w-body`}>
<Box
className={`w-box cpwx33v cp62vef c1hswiz5 cedz2mm crrl15v clbs92w`}>
<Box
className={`w-box cpwx33v c1yxxhnm cp62vef cedz2mm crrl15v cmyczec coyepdn`}>
<Link
href={!system?.search?.loggedin ? '/' : `/?loggedin=${system?.search?.loggedin}`}
className={`w-link c8ks6xp`}>
<Image
src={"/assets/supabase-logo_cXpAta6PVvM_dVc0fIADM.svg"}
width={109}
height={113}
className={`w-image c1f8w3i3`} />
</Link>
<NavigationMenu
value={menuValue}
onValueChange={(value: any) => {
menuValue = value
set$menuValue(menuValue)
}}
className={`w-navigation-menu ch9jkjg cz39tuz`}>
<NavigationMenuList
className={`w-menu-list cedz2mm ch9e4y cc23ktf c1xldgkv c28w2i8 crrl15v clbs92w ci6nd68 c12ok21h cm8nfc1 c1r9absx`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
href={!system?.search?.loggedin ? '/' : `/?loggedin=${system?.search?.loggedin}`}
className={`w-link c4xj87l cucjs3f crrl15v clbs92w cjzjvn4 ceh9yeh c1gjovat cjf71se c1l9sat6 c7gtges c1p89z0d c1v28ws c1qa7i86 c1ituevq c10bbw32 c1qi7qae c1g725w2 c1a7pmjd c1e4gats c1gb9obc c1ycecs1 cg2bdry c1qpuqes c134g2tu`}>
{"Home"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
{(system?.search?.loggedin ? false : true) &&
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
href={!system?.search?.loggedin ? '/sign-up' : `/sign-up?loggedin=${system?.search?.loggedin}`}
className={`w-link c4xj87l cucjs3f crrl15v clbs92w cjzjvn4 ceh9yeh c1gjovat cjf71se c1l9sat6 c7gtges c1p89z0d c1v28ws c1qa7i86 c1ituevq c10bbw32 c1qi7qae c1g725w2 c1a7pmjd c1e4gats c1gb9obc c1ycecs1 cg2bdry c1qpuqes c134g2tu`}>
{"Sign Up"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
}
{(system?.search?.loggedin ? false : true) &&
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
href={!system?.search?.loggedin ? '/sign-in' : `/sign-in?loggedin=${system?.search?.loggedin}`}
className={`w-link c4xj87l cucjs3f crrl15v clbs92w cjzjvn4 ceh9yeh c1gjovat cjf71se c1l9sat6 c7gtges c1p89z0d c1v28ws c1qa7i86 c1ituevq c10bbw32 c1qi7qae c1g725w2 c1a7pmjd c1e4gats c1gb9obc c1ycecs1 cg2bdry c1qpuqes c134g2tu`}>
{"Sign In"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
}
{(system?.search?.loggedin ? true : false) &&
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
href={!system?.search?.loggedin ? '/sign-out' : `/sign-out?loggedin=${system?.search?.loggedin}`}
className={`w-link c4xj87l cucjs3f crrl15v clbs92w cjzjvn4 ceh9yeh c1gjovat cjf71se c1l9sat6 c7gtges c1p89z0d c1v28ws c1qa7i86 c1ituevq c10bbw32 c1qi7qae c1g725w2 c1a7pmjd c1e4gats c1gb9obc c1ycecs1 cg2bdry c1qpuqes c134g2tu`}>
{"Sign Out"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
}
{(system?.search?.loggedin ? true : false) &&
<NavigationMenuItem
data-ws-index="4"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
href={!system?.search?.loggedin ? '/user-id' : `/user-id?loggedin=${system?.search?.loggedin}`}
className={`w-link c4xj87l cucjs3f crrl15v clbs92w cjzjvn4 ceh9yeh c1gjovat cjf71se c1l9sat6 c7gtges c1p89z0d c1v28ws c1qa7i86 c1ituevq c10bbw32 c1qi7qae c1g725w2 c1a7pmjd c1e4gats c1gb9obc c1ycecs1 cg2bdry c1qpuqes c134g2tu`}>
{"Profile"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
}
</NavigationMenuList>
<Box
className={`w-box cpwx33v ci1lhyt cwm9a0t cedz2mm clbs92w`}>
<NavigationMenuViewport
className={`w-menu-viewport ch9jkjg csvsdx7 cjzjvn4 ceh9yeh c1gjovat cjf71se c1mqfhhk c13yw80w c126qn1g c1rlohfm c6fqqjd c1o0xmz9 c1io3z6o c3xw7hh`} />
</Box>
</NavigationMenu>
</Box>
{(system?.search?.loggedin ? true : false) &&
<Box
className={`w-box cp62vef c1hswiz5 cedz2mm crrl15v clbs92w cawvv4x`}>
<Button
id={"signout-button"}
type={"button"}
className={`w-button c15ekx34 c19a0pre`}>
{"Sign Out"}
</Button>
</Box>
}
{(system?.search?.loggedin ? false : true) &&
<Box
className={`w-box cp62vef c1hswiz5 cedz2mm crrl15v clbs92w cawvv4x`}>
<Heading
className={`w-heading`}>
{"Page Not Found"}
</Heading>
</Box>
}
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script src=\"https://unpkg.com/@supabase/supabase-js@2.43.3/dist/umd/supabase.js\"></script>\n<script type=\"module\">\n    const supabaseUrl = 'https://hsohytgpflijgkjlnxja.supabase.co';\n    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzb2h5dGdwZmxpamdramxueGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NTI1NDMsImV4cCI6MjA1OTAyODU0M30.eH-pzIhNf7UKgy37FPR8SyA8ycsi5iF867mcVxj-72I';\n    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);\n\n    const addEventListenerOnce = (element, eventType, handler) => {\n        if (element && !element.hasAttribute('data-event-initialized')) {\n            element.addEventListener(eventType, handler, true);\n            element.setAttribute('data-event-initialized', 'true');\n        }\n    };\n\n    const handleSignUp = async (e) => {\n        e.preventDefault();\n        const email = document.getElementById('signup-email').value;\n        const password = document.getElementById('signup-password').value;\n\n        const { user, error } = await supabase.auth.signUp({ email, password });\n        if (error) {\n            console.error('SignUp Error:', error.message);\n            document.getElementById('signup-error-message').innerHTML = error.message;\n        } else {\n            location.reload();\n        }\n    };\n\n    const handleSignIn = async (e) => {\n        e.preventDefault();\n        const email = document.getElementById('signin-email').value;\n        const password = document.getElementById('signin-password').value;\n\n        const { user, error } = await supabase.auth.signInWithPassword({ email, password });\n        if (error) {\n            console.error('SignIn Error:', error.message);\n            document.getElementById('signin-error-message').innerHTML = error.message;\n        } else {\n            window.location.href = '/user-id?loggedin=true';\n        }\n    };\n\n    const handleSignOut = async () => {\n        const { error } = await supabase.auth.signOut();\n        if (error) {\n            console.error('SignOut Error:', error.message);\n        } else {\n            location.reload();\n        }\n    };\n\n    supabase.auth.onAuthStateChange((event, session) => {\n        const publicElements = document.querySelectorAll(\"[data-onlogin='hide']\");\n        const privateElements = document.querySelectorAll(\"[data-onlogin='show']\");\n        const url = new URL(window.location);\n        const isLoggedInParamSet = url.searchParams.has('loggedin');\n\n        if (session) {\n            if (!isLoggedInParamSet) {\n                handleSignOut();\n                return;\n            }\n            privateElements.forEach(element => element.style.display = \"initial\");\n            publicElements.forEach(element => element.style.display = \"none\");\n            if(document.getElementById('SessionDisplay')) {\n              document.getElementById('SessionDisplay').innerText = session.user.id;\n            }\n            url.searchParams.set('loggedin', 'true');\n        } else {\n            publicElements.forEach(element => element.style.display = \"initial\");\n            privateElements.forEach(element => element.style.display = \"none\");\n            url.searchParams.delete('loggedin');\n            if (isLoggedInParamSet) {\n                window.location.href = '/sign-in';\n                return;\n            }\n        }\n\n        window.history.replaceState({}, '', url);\n    });\n\n    const signUpForm = document.getElementById('form-signup-form');\n    const signInForm = document.getElementById('form-signin-form');\n    const signOutButton = document.getElementById('signout-button');\n\n    addEventListenerOnce(signUpForm, 'submit', handleSignUp);\n    addEventListenerOnce(signInForm, 'submit', handleSignIn);\n    addEventListenerOnce(signOutButton, 'click', handleSignOut);\n</script>\n"}
clientOnly={false}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    