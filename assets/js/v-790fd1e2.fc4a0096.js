"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[97548],{67120:(e,t,o)=>{o.r(t),o.d(t,{data:()=>n});const n={key:"v-790fd1e2",path:"/devices/FreePad_LeTV_8.html",title:"DIYRuZ FreePad_LeTV_8 control via MQTT",lang:"en-US",frontmatter:{title:"DIYRuZ FreePad_LeTV_8 control via MQTT",description:"Integrate your DIYRuZ FreePad_LeTV_8 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-12-01T19:02:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Switch_type (enum, button_1 endpoint)",slug:"switch-type-enum-button-1-endpoint",children:[]},{level:3,title:"Switch_actions (enum, button_1 endpoint)",slug:"switch-actions-enum-button-1-endpoint",children:[]},{level:3,title:"Switch_type (enum, button_2 endpoint)",slug:"switch-type-enum-button-2-endpoint",children:[]},{level:3,title:"Switch_actions (enum, button_2 endpoint)",slug:"switch-actions-enum-button-2-endpoint",children:[]},{level:3,title:"Switch_type (enum, button_3 endpoint)",slug:"switch-type-enum-button-3-endpoint",children:[]},{level:3,title:"Switch_actions (enum, button_3 endpoint)",slug:"switch-actions-enum-button-3-endpoint",children:[]},{level:3,title:"Switch_type (enum, button_4 endpoint)",slug:"switch-type-enum-button-4-endpoint",children:[]},{level:3,title:"Switch_actions (enum, button_4 endpoint)",slug:"switch-actions-enum-button-4-endpoint",children:[]},{level:3,title:"Switch_type (enum, button_5 endpoint)",slug:"switch-type-enum-button-5-endpoint",children:[]},{level:3,title:"Switch_actions (enum, button_5 endpoint)",slug:"switch-actions-enum-button-5-endpoint",children:[]},{level:3,title:"Switch_type (enum, button_6 endpoint)",slug:"switch-type-enum-button-6-endpoint",children:[]},{level:3,title:"Switch_actions (enum, button_6 endpoint)",slug:"switch-actions-enum-button-6-endpoint",children:[]},{level:3,title:"Switch_type (enum, button_7 endpoint)",slug:"switch-type-enum-button-7-endpoint",children:[]},{level:3,title:"Switch_actions (enum, button_7 endpoint)",slug:"switch-actions-enum-button-7-endpoint",children:[]},{level:3,title:"Switch_type (enum, button_8 endpoint)",slug:"switch-type-enum-button-8-endpoint",children:[]},{level:3,title:"Switch_actions (enum, button_8 endpoint)",slug:"switch-actions-enum-button-8-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/FreePad_LeTV_8.md",git:{updatedTime:164085738e4}}},23032:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var n=o(66252);const c=(0,n._)("h1",{id:"diyruz-freepad-letv-8",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#diyruz-freepad-letv-8","aria-hidden":"true"},"#"),(0,n.Uk)(" DIYRuZ FreePad_LeTV_8")],-1),i=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"FreePad_LeTV_8")],-1),a=(0,n._)("tr",null,[(0,n._)("td",null,"Vendor"),(0,n._)("td",null,"DIYRuZ")],-1),u=(0,n._)("td",null,"Description",-1),s={href:"https://modkam.ru/?p=1791",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("LeTV 8key FreePad mod"),l=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, action, switch_type, switch_actions, linkquality")],-1),p=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/FreePad_LeTV_8.jpg",alt:"DIYRuZ FreePad_LeTV_8"})])],-1),r=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>*_single</code>, <code>*_double</code>, <code>*_triple</code>, <code>*_quadruple</code>, <code>*_release</code>.</p><h3 id="switch-type-enum-button-1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-1-endpoint" aria-hidden="true">#</a> Switch_type (enum, button_1 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_button_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_1&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-1-endpoint" aria-hidden="true">#</a> Switch_actions (enum, button_1 endpoint)</h3><p>Value can be found in the published state on the <code>switch_actions_button_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_1&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-2-endpoint" aria-hidden="true">#</a> Switch_type (enum, button_2 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_button_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_2&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-2-endpoint" aria-hidden="true">#</a> Switch_actions (enum, button_2 endpoint)</h3><p>Value can be found in the published state on the <code>switch_actions_button_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_2&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-3-endpoint" aria-hidden="true">#</a> Switch_type (enum, button_3 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_button_3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_3&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-3-endpoint" aria-hidden="true">#</a> Switch_actions (enum, button_3 endpoint)</h3><p>Value can be found in the published state on the <code>switch_actions_button_3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_3&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-4-endpoint" aria-hidden="true">#</a> Switch_type (enum, button_4 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_button_4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_4&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-4-endpoint" aria-hidden="true">#</a> Switch_actions (enum, button_4 endpoint)</h3><p>Value can be found in the published state on the <code>switch_actions_button_4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_4&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-5-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-5-endpoint" aria-hidden="true">#</a> Switch_type (enum, button_5 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_button_5</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_5&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_5&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-5-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-5-endpoint" aria-hidden="true">#</a> Switch_actions (enum, button_5 endpoint)</h3><p>Value can be found in the published state on the <code>switch_actions_button_5</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_5&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_5&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-6-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-6-endpoint" aria-hidden="true">#</a> Switch_type (enum, button_6 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_button_6</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_6&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_6&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-6-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-6-endpoint" aria-hidden="true">#</a> Switch_actions (enum, button_6 endpoint)</h3><p>Value can be found in the published state on the <code>switch_actions_button_6</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_6&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_6&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-7-endpoint" aria-hidden="true">#</a> Switch_type (enum, button_7 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_button_7</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_7&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_7&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-7-endpoint" aria-hidden="true">#</a> Switch_actions (enum, button_7 endpoint)</h3><p>Value can be found in the published state on the <code>switch_actions_button_7</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_7&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_7&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-8-endpoint" aria-hidden="true">#</a> Switch_type (enum, button_8 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_button_8</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_8&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_8&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-8-endpoint" aria-hidden="true">#</a> Switch_actions (enum, button_8 endpoint)</h3><p>Value can be found in the published state on the <code>switch_actions_button_8</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_8&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_8&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',39),_={},b=(0,o(83744).Z)(_,[["render",function(e,t){const o=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[c,(0,n._)("table",null,[i,(0,n._)("tbody",null,[d,a,(0,n._)("tr",null,[u,(0,n._)("td",null,[(0,n._)("a",s,[h,(0,n.Wm)(o)])])]),l,p])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,n]of t)e[o]=n;return e}}}]);