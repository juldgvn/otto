/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Box as Box, Text as Text, Label as Label, Input as Input, Button as Button, Heading as Heading, Slot as Slot } from "@webstudio-is/sdk-components-react";
import { Body as Body, Form as Form } from "@webstudio-is/sdk-components-react-router";


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
let [formState, set$formState] = useVariableState<any>("initial")
return <Body
className={`w-body`}>
<Box
className={`w-box cpwx33v cp62vef c1hswiz5 cedz2mm crrl15v clbs92w`}>
{(system?.search?.loggedin ? false : true) &&
<Box
className={`w-box clgvjq0 c1vmo7f4 cedz2mm crrl15v clbs92w cawvv4x`}>
<Text
className={`w-text c1j7pikj cjwjw95`}>
{"Sign Up"}
</Text>
<Form
state={formState}
onStateChange={(state: any) => {
formState = state
set$formState(formState)
}}
id={"form-signup-form"}
className={`w-webhook-form c19a0pre`}>
{(formState === 'initial' || formState === 'error') &&
<Box
className={`w-box`}>
<Label
className={`w-input-label`}>
{"Email"}
</Label>
<Input
name={"email"}
id={"signup-email"}
type={"email"}
className={`w-text-input`} />
<Label
className={`w-input-label`}>
{"Password"}
</Label>
<Input
name={"password"}
id={"signup-password"}
type={"password"}
className={`w-text-input`} />
<Button
type={"submit"}
className={`w-button c15ekx34`}>
{"Sign Up"}
</Button>
</Box>
}
{(formState === 'success') &&
<Box
className={`w-box`}>
{"Signed Up"}
</Box>
}
<Box
id={"signup-error-message"}
className={`w-box`}>
{""}
</Box>
</Form>
</Box>
}
{(system?.search?.loggedin ? true : false) &&
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
    