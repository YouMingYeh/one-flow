import{a as r,j as t}from"./jsx-runtime-DYLoWL1Z.js";import{u as T,T as h,a as g,b as S,c as x,d as B,e as C,B as D}from"./index-AudKMX7Z.js";import"./index-DVXBtNgz.js";import"./_baseUniq-iNfMP8zI.js";import"./mapValues-DnIGKY-a.js";import"./index-RMSiDl4v.js";import"./isPlainObject-vSntmbfW.js";import"./throttle-l7RjolM8.js";import"./tiny-invariant-CopsF_GD.js";function j(){const{toasts:a}=T();return r(h,{children:[a.map(({id:n,title:o,description:i,action:f,...v})=>r(g,{...v,children:[r("div",{className:"grid gap-1",children:[o&&t(S,{children:o}),i&&t(x,{children:i})]}),f,t(B,{})]},n)),t(C,{})]})}const P={title:"Components/Toast",component:g,parameters:{layout:"padded"},argTypes:{title:{control:"text",defaultValue:"This is a toast message"},variant:{control:"select",options:["default","destructive"],defaultValue:"default"}}},s=({title:a,variant:n})=>{const{toast:o}=T();return r("div",{children:[t(D,{onClick:()=>o({title:a,variant:n}),variant:"outline",children:"Show toast"}),t(j,{})]})},e={name:"SingleToast",args:{title:"This is a toast message",variant:"default"},render:a=>t(s,{...a})};e.args={title:"This is a toast message",variant:"default"};var l,c,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`({
  title,
  variant
}) => {
  const {
    toast
  } = useToast();
  return <div>
      <Button onClick={() => toast({
      title,
      variant
    })} variant='outline'>
        Show toast
      </Button>
      <Toaster />
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'SingleToast',
  args: {
    title: 'This is a toast message',
    variant: 'default'
  },
  render: args => <DefaultToast {...args} />
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const q=["DefaultToast","SingleToast"];export{s as DefaultToast,e as SingleToast,q as __namedExportsOrder,P as default};
