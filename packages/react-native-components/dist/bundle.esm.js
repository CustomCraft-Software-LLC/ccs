import e,{useContext as t,createContext as n,useState as r}from"react";import{View as o,Text as a,TouchableOpacity as c,StyleSheet as l,Platform as i,KeyboardAvoidingView as s,Button as f}from"react-native";var m=n(void 0),u=function(){var n=t(m),r=n.currentRoute,l=n.navigate;return function(){switch(r){case"Home":return e.createElement(o,{style:b.screen},e.createElement(a,{style:b.text},"Home Screen"),e.createElement(c,{onPress:function(){return l("Details")},style:b.button},e.createElement(a,{style:b.buttonText},"Go to Details")));case"Details":return e.createElement(o,{style:b.screen},e.createElement(a,{style:b.text},"Details Screen"),e.createElement(c,{onPress:function(){return l("Home")},style:b.button},e.createElement(a,{style:b.buttonText},"Go to Home")));default:return e.createElement(o,{style:b.screen},e.createElement(a,{style:b.text},"Not Found"))}}()},b={screen:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"},text:{fontSize:24,marginBottom:20},button:{padding:10,backgroundColor:"#007BFF",borderRadius:5},buttonText:{color:"#fff",fontSize:16}},d=function(t){var n=t.children,r=t.style,o=t.behavior,a=void 0===o?"padding":o,c=t.keyboardVerticalOffset,l=void 0===c?"ios"===i.OS?60:0:c;return e.createElement(s,{style:[y.container,r],behavior:a,keyboardVerticalOffset:l},n)},y=l.create({container:{flex:1}}),E=function(t){var n=t.onNavigate;return e.createElement(o,{style:g.container},e.createElement(a,{style:g.title},"Home Screen"),e.createElement(f,{title:"Go to Details",onPress:function(){return n("Details",{itemId:42})}}))},g=l.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f8f9fa"},title:{fontSize:24,fontWeight:"bold",marginBottom:20,color:"#343a40"}}),v=function(t){var n=t.params,r=t.onBack,c=(n||{}).itemId;return e.createElement(o,{style:x.container},e.createElement(a,{style:x.title},"Details Screen"),e.createElement(a,{style:x.itemIdText},"Item ID: ",c),e.createElement(f,{title:"Go Back",onPress:r}))},x=l.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#e9ecef"},title:{fontSize:24,fontWeight:"bold",marginBottom:20,color:"#495057"},itemIdText:{fontSize:18,marginBottom:20,color:"#6c757d"}}),T=function(){var t=r("Home"),n=t[0],o=t[1],a=r(void 0),c=a[0],l=a[1];return e.createElement(e.Fragment,null,"Home"===n&&e.createElement(E,{onNavigate:function(e,t){o(e),l(t)}}),"Details"===n&&e.createElement(v,{params:c,onBack:function(){"Home"!==n&&(o("Home"),l(void 0))}}))},S=function(t){var n=t.title,r=t.onBackPress,l=t.onMenuPress;return e.createElement(o,{style:P.container},r&&e.createElement(c,{onPress:r,style:P.button},e.createElement(a,{style:P.buttonText},"Back")),e.createElement(a,{style:P.title},n),l&&e.createElement(c,{onPress:l,style:P.button},e.createElement(a,{style:P.buttonText},"Menu")))},P=l.create({container:{height:60,backgroundColor:"#007bff",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10},title:{fontSize:18,fontWeight:"bold",color:"#fff"},button:{padding:10},buttonText:{fontSize:16,color:"#fff"}}),h=function(t){var n=t.activeTab,r=t.onTabPress;return e.createElement(o,{style:k.container},e.createElement(c,{style:[k.tab,"Home"===n&&k.activeTab],onPress:function(){return r("Home")}},e.createElement(a,{style:k.tabText},"Home")),e.createElement(c,{style:[k.tab,"Search"===n&&k.activeTab],onPress:function(){return r("Search")}},e.createElement(a,{style:k.tabText},"Search")),e.createElement(c,{style:[k.tab,"Profile"===n&&k.activeTab],onPress:function(){return r("Profile")}},e.createElement(a,{style:k.tabText},"Profile")))},k=l.create({container:{flexDirection:"row",height:60,backgroundColor:"#007bff",justifyContent:"space-around",alignItems:"center"},tab:{flex:1,alignItems:"center",justifyContent:"center",padding:10},tabText:{color:"#ffffff",fontSize:16},activeTab:{backgroundColor:"#0056b3"}});export{h as BottomNavigation,E as HomeScreen,d as KeyboardAwareComponent,u as NavigationContainer,T as StackNavigation,S as TopNavigation};
//# sourceMappingURL=bundle.esm.js.map
