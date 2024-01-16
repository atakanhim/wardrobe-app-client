// ProfileScreenStyles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   paddingVertical:24,
   
  },
  profile:{
    borderColor:"black",
    padding:20,
    marginTop:20,
    alignItems:"center",
    justifyContent:"center"
  },
  profileName:{
    marginTop:25,
    fontSize:17,
    fontWeight:"600",
    color:"black",
    textAlign:"center"
  },
  profileAvatarWrapper:{
    position:"relative",
  },
  section:{
    paddingHorizontal:24
  },
  sectionHeader:{
    paddingVertical:12,
    fontSize:12,
    fontWeight:'600',
    color:'#9e9e9e',
    textTransform:"uppercase",
    letterSpacing:1.1
  },
  profileAvatar:{
    width:72,
    height:72,
    borderRadius:999,
  },
  profileAction:{
    backgroundColor:"#007bff",
    width:28,
    height:28,
    borderRadius:999,
    position:"absolute",
    right:-4,
    bottom:-10,
    alignItems:"center",
    justifyContent:"center"
    
  },
  row:{
    
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    height:50,
    backgroundColor:'#E9E9E9',
    borderRadius:8,
    marginBottom:11,
    paddingHorizontal:15
  },
  rowLabel:{
    fontSize:17,
    color:"#0c0c0c"
  },
  rowIcon:{
    width:32,
    height:32,
    borderRadius:999,
    alignItems:"center",
    justifyContent:"center",
    marginRight:12
  }

 
});

export default styles;
