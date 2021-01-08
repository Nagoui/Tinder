// // import React, { Component } from 'react';
// // import {
// //   AppRegistry,
// //   StyleSheet,
// //   Text,
// //   View,
// //   Button,
// //   Image,
// //   ActivityIndicator,
// //   TouchableOpacity,
// //   Dimensions,
// // } from 'react-native';
// // const  {width,height } = Dimensions.get('window');
// // import * as firebase from 'firebase'
// // import RNFetchBlob from 'react-native-fetch-blob'
// // import ImagePicker from 'react-native-image-crop-picker'
// // const config = {
// //   apiKey: "AIzaSyBGeP5el8S6yCqYfjHqttm-MvdlF_HhJ9c",
// //     authDomain: "tinder-db878.firebaseapp.com",
// //     databaseURL: "https://tinder-db878.firebaseio.com",
// //     projectId: "tinder-db878",
// //     storageBucket: "tinder-db878.appspot.com",
// //     messagingSenderId: "985450576342",
// //     appId: "1:985450576342:web:2f573cd80bf6b290accc77"
// //   }
// // firebase.initializeApp(config);

// // export default class RNF extends Component {
// //   constructor(props) {
// //    super(props)
// //    this.state = {
// //      loading: false,
// //      dp: null
// //     }
// //   }
  
// //   pickMultiple() {
// //     ImagePicker.openPicker({
// //       multiple: true,
// //       waitAnimationEnd: false,
// //       sortOrder: 'desc',
// //       includeExif: true,
// //       forceJpg: true,
// //     })
// //       .then((images) => {
// //         this.setState({
// //           image: null,
// //           images: images.map((i) => {
// //             console.log('received image', i);
// //             return {
// //               uri: i.path,
// //               width: i.width,
// //               height: i.height,
// //               mime: i.mime,
// //             };
// //           }),
// //         });
// //       })
// //       .catch((e) => alert(e));
// //   }

// //   openPicker(){
// //     this.setState({ loading: true })
// //     const Blob = RNFetchBlob.polyfill.Blob
// //     const fs = RNFetchBlob.fs
// //     window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
// //     window.Blob = Blob
// //     //const { uid } = this.state.user
// //     const uid = "12345"
// //     ImagePicker.openPicker({
// //       path: 'file:///storage/qqq/',
// //       // width: 300,
// //       // height: 300,
      
// //       cropping: true,
// //       mediaType: 'photo'
// //     }).then(image => {
// //     //  const aimages =// images.map((i) => {
// //     //     // console.log('received image', i);
// //     //     {
// //     //       path,
// //     //       // width: image.width,
// //     //       // height: image.height,
// //     //       mime,
// //     //     };
// //       // })
// //       const imagePath = image.path
// //       console.log('==>')
// //       console.log(imagePath)
// //       const images = image.path
// //       let uploadBlob = null

// //       const imageRef = firebase.storage().ref(uid).child(imagePath)
// //       let mime = 'image/jpg'
// //       fs.readFile(imagePath, 'base64')
// //         .then((data) => {
// //           //console.log(data);
// //           return Blob.build(data, { type: `${mime};BASE64` })
// //       })
// //       .then((blob) => {
// //           uploadBlob = blob
// //           return imageRef.put(blob, { contentType: mime })
// //         })
// //         .then(() => {
// //           uploadBlob.close()
// //           return imageRef.getDownloadURL()
// //         })
// //         .then((url) => {

// //           let userData = {}
// //           //userData[dpNo] = url
// //           //firebase.database().ref('users').child(uid).update({ ...userData})

// //           let obj = {}
// //           obj["loading"] = false
// //           obj["dp"] = url
// //           this.setState(obj)

// //         })
// //         .catch((error) => {
// //           console.log(error)
// //         })
// //     })
// //     .catch((error) => {
// //       console.log(error)
// //     })
// //   }
// //   render() {
// //     const dpr = this.state.dp ? (<TouchableOpacity onPress={ () => this.openPicker() }><Image
// //          style={{width:300, height: 300, margin: 5}}
// //          source={{uri: this.state.dp}}
// //        /></TouchableOpacity>) : (<Button
// //       onPress={ () => this.openPicker() }
// //       title={ "Change Picture" }
// //     />)

// //     const dps = this.state.loading ? <ActivityIndicator animating={this.state.loading} /> : (<View style={styles.container}>
// //       <View style={{flexDirection: "row"}}>
// //         { dpr }
// //       </View>
// //     </View>)

// //     return (
// //       <View style={styles.container}>
// //         { dps }
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// // });

// // AppRegistry.registerComponent('RNF', () => RNF);



// import React, {Component} from 'react';
// import {
//   AppRegistory,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker'
// import RNFetchBlob from 'react-native-fetch-blob'
// import * as firebase from 'firebase';
//   const firebaseConfig = {
//     apiKey: "AIzaSyBGeP5el8S6yCqYfjHqttm-MvdlF_HhJ9c",
//     authDomain: "tinder-db878.firebaseapp.com",
//     databaseURL: "https://tinder-db878.firebaseio.com",
//     projectId: "tinder-db878",
//     storageBucket: "tinder-db878.appspot.com",
//     messagingSenderId: "985450576342",
//     appId: "1:985450576342:web:2f573cd80bf6b290accc77"
//   };
//    firebase.initializeApp(firebaseConfig)
// export default class RNF extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       loading:false,
//       dp:null
//     }
//   }
//   openPicker(){
//     this.setState({loading:true})
//     const Blob = RNFetchBlob.polyfill.Blob
//     const fs = RNFetchBlob.fs
//     window.XMLHttpRequest= RNFetchBlob.polyfill.XMLHttpRequest
//     window.Blob = Blob

//     const uid = '12345'
//     ImagePicker.openPicker({
//       width:300,
//       height:300,
//       cropping:true,
//       mediaType:'photo'
//     }).then(image=>{

//       const imagePath=image.path
//       let uploadBlob=null
//       const imageRef = firebase.storage().ref(uid).child("dp.jpg")
//       let mime= 'image/jpg'
//       fs.readFile(imagePath,'base64')
//       // .then((data),{type:'${mime};BASE64'})
//     })
//     .then((data)=>{
//       return Blob.build(data,{type:'${mime};BASE64'})
//     })
//     .then((blob)=>{
//       uploadBlob=blob
//       return imageRef.put(blob,{contentType:mime})
//     })
//     .then(()=>{
//       uploadBlob.close()
    
//       return imageRef.getDownloadURL()

//     })
//     .then((url)=>{
//       let userData = {}
//       let obj = {}
//       obj["loading"] = false
//       obj['dp'] = url
//       this.setState(obj)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
  
//   .catch((error)=>{
//     console.log(error)
//   })

//   }
//   render(){
//     const dpr = this.state.dp?(<TouchableOpacity onPress={()=>this.openPicker()}>
//       <Image style={{width:100,height:100,magin:5}} source={{uri:this.state.dp}} />
//     </TouchableOpacity>) :(
//       <Button onPress={()=>this.openPicker('dp')}
//         title={"Change Picture"}  />
//       )

//     const dps = this.state.loading ? <ActivityIndicator animating={this.state.loading}/>
//     :
//     (
//       <View style={styles.container} >
//       <View style={{flexDirection:'row'}}>
//         {dpr}
//       </View>
//     </View>
//     )
//     return(
//       <View style={styles.container}>
//           {dps}
//       </View>
//     )
//   }
// }


// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//   }
// })








// // import React, { Component } from 'react';
// // import { Alert, Image, NativeModules, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// // // import Video from 'react-native-video';

// // var ImagePicker = NativeModules.ImageCropPicker;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   button: {
// //     backgroundColor: 'blue',
// //     marginBottom: 10,
// //   },
// //   text: {
// //     color: 'white',
// //     fontSize: 20,
// //     textAlign: 'center',
// //   },
// // });

// // export default class App extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       image: null,
// //       images: null,
// //     };
// //   }

// //   pickSingleWithCamera(cropping, mediaType = 'photo') {
// //     ImagePicker.openCamera({
// //       cropping: cropping,
// //       width: 500,
// //       height: 500,
// //       includeExif: true,
// //       mediaType,
// //     })
// //       .then((image) => {
// //         console.log('received image', image);
// //         this.setState({
// //           image: {
// //             uri: image.path,
// //             width: image.width,
// //             height: image.height,
// //             mime: image.mime,
// //           },
// //           images: null,
// //         });
// //       })
// //       .catch((e) => alert(e));
// //   }

// //   pickSingleBase64(cropit) {
// //     ImagePicker.openPicker({
// //       width: 300,
// //       height: 300,
// //       cropping: cropit,
// //       includeBase64: true,
// //       includeExif: true,
// //     })
// //       .then((image) => {
// //         console.log('received base64 image');
// //         this.setState({
// //           image: {
// //             uri: `data:${image.mime};base64,` + image.data,
// //             width: image.width,
// //             height: image.height,
// //           },
// //           images: null,
// //         });
// //       })
// //       .catch((e) => alert(e));
// //   }

// //   cleanupImages() {
// //     ImagePicker.clean()
// //       .then(() => {
// //         console.log('removed tmp images from tmp directory');
// //       })
// //       .catch((e) => {
// //         alert(e);
// //       });
// //   }

// //   cleanupSingleImage() {
// //     let image =
// //       this.state.image ||
// //       (this.state.images && this.state.images.length
// //         ? this.state.images[0]
// //         : null);
// //     console.log('will cleanup image', image);

// //     ImagePicker.cleanSingle(image ? image.uri : null)
// //       .then(() => {
// //         console.log(`removed tmp image ${image.uri} from tmp directory`);
// //       })
// //       .catch((e) => {
// //         alert(e);
// //       });
// //   }

// //   cropLast() {
// //     if (!this.state.image) {
// //       return Alert.alert(
// //         'No image',
// //         'Before open cropping only, please select image'
// //       );
// //     }

// //     ImagePicker.openCropper({
// //       path: this.state.image.uri,
// //       width: 200,
// //       height: 200,
// //     })
// //       .then((image) => {
// //         console.log('received cropped image', image);
// //         this.setState({
// //           image: {
// //             uri: image.path,
// //             width: image.width,
// //             height: image.height,
// //             mime: image.mime,
// //           },
// //           images: null,
// //         });
// //       })
// //       .catch((e) => {
// //         console.log(e);
// //         Alert.alert(e.message ? e.message : e);
// //       });
// //   }

// //   pickSingle(cropit, circular = false, mediaType) {
// //     ImagePicker.openPicker({
// //       width: 500,
// //       height: 500,
// //       cropping: cropit,
// //       cropperCircleOverlay: circular,
// //       sortOrder: 'none',
// //       compressImageMaxWidth: 1000,
// //       compressImageMaxHeight: 1000,
// //       compressImageQuality: 1,
// //       compressVideoPreset: 'MediumQuality',
// //       includeExif: true,
// //       cropperStatusBarColor: 'white',
// //       cropperToolbarColor: 'white',
// //       cropperActiveWidgetColor: 'white',
// //       cropperToolbarWidgetColor: '#3498DB',
// //     })
// //       .then((image) => {
// //         console.log('received image', image);
// //         this.setState({
// //           image: {
// //             uri: image.path,
// //             width: image.width,
// //             height: image.height,
// //             mime: image.mime,
// //           },
// //           images: null,
// //         });
// //       })
// //       .catch((e) => {
// //         console.log(e);
// //         Alert.alert(e.message ? e.message : e);
// //       });
// //   }

// //   pickMultiple() {
// //     ImagePicker.openPicker({
// //       multiple: true,
// //       waitAnimationEnd: false,
// //       sortOrder: 'desc',
// //       includeExif: true,
// //       forceJpg: true,
// //     })
// //       .then((images) => {
// //         this.setState({
// //           image: null,
// //           images: images.map((i) => {
// //             console.log('received image', i);
// //             return {
// //               uri: i.path,
// //               width: i.width,
// //               height: i.height,
// //               mime: i.mime,
// //             };
// //           }),
// //         });
// //       })
// //       .catch((e) => alert(e));
// //   }

// //   scaledHeight(oldW, oldH, newW) {
// //     return (oldH / oldW) * newW;
// //   }

// //   renderVideo(video) {
// //     console.log('rendering video');
// //     return (
// //       <View style={{ height: 300, width: 300 }}>
// //         {/* <Video
// //           source={{ uri: video.uri, type: video.mime }}
// //           style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
// //           rate={1}
// //           paused={false}
// //           volume={1}
// //           muted={false}
// //           resizeMode={'cover'}
// //           onError={(e) => console.log(e)}
// //           onLoad={(load) => console.log(load)}
// //           repeat={true}
// //         /> */}
// //       </View>
// //     );
// //   }

// //   renderImage(image) {
// //     return (
// //       <Image
// //         style={{ width: 300, height: 300, resizeMode: 'contain' }}
// //         source={image}
// //       />
// //     );
// //   }

// //   renderAsset(image) {
// //     if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
// //       return this.renderVideo(image);
// //     }

// //     return this.renderImage(image);
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <ScrollView>
// //           {this.state.image ? this.renderAsset(this.state.image) : null}
// //           {this.state.images
// //             ? this.state.images.map((i) => (
// //               <View key={i.uri}>{this.renderAsset(i)}</View>
// //             ))
// //             : null}
// //         </ScrollView>

// //         <TouchableOpacity
// //           onPress={() => this.pickSingleWithCamera(false)}
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>Select Single Image With Camera</Text>
// //         </TouchableOpacity>
// //         {/* <TouchableOpacity
// //           onPress={() =>
// //             this.pickSingleWithCamera(false, (mediaType = 'video'))
// //           }
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>Select Single Video With Camera</Text>
// //         </TouchableOpacity> */}
// //         {/* <TouchableOpacity
// //           onPress={() => this.pickSingleWithCamera(true)}
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>
// //             Select Single With Camera With Cropping
// //           </Text>
// //         </TouchableOpacity> */}
// //         {/* <TouchableOpacity
// //           onPress={() => this.pickSingle(false)}
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>Select Single</Text>
// //         </TouchableOpacity> */}
// //         {/* <TouchableOpacity onPress={() => this.cropLast()} style={styles.button}>
// //           <Text style={styles.text}>Crop Last Selected Image</Text>
// //         </TouchableOpacity>
// //          */}
// //         {/* <TouchableOpacity
// //           onPress={() => this.pickSingleBase64(false)}
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>Select Single Returning Base64</Text>
// //         </TouchableOpacity>
// //          */}
// //         {/* <TouchableOpacity
// //           onPress={() => this.pickSingle(true)}
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>Select Single With Cropping</Text>
// //         </TouchableOpacity>
// //          */}
// //         {/* <TouchableOpacity
// //           onPress={() => this.pickSingle(true, true)}
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>Select Single With Circular Cropping</Text>
// //         </TouchableOpacity>
// //          */}
// //         <TouchableOpacity
// //           onPress={this.pickMultiple.bind(this)}
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>Select Multiple</Text>
// //         </TouchableOpacity>

// //         {/* <TouchableOpacity
// //           onPress={this.cleanupImages.bind(this)}
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>Cleanup All Images</Text>
// //         </TouchableOpacity>
// //          */}
// //         {/* <TouchableOpacity
// //           onPress={this.cleanupSingleImage.bind(this)}
// //           style={styles.button}
// //         >
// //           <Text style={styles.text}>Cleanup Single Image</Text>
// //         </TouchableOpacity> */}
// //       </View>
// //     );
// //   }
// // }
// // // // import React from 'react';

// // // // import {

// // // //   Image,

// // // //   PixelRatio,

// // // //   StyleSheet,
// // // //   TextInput,
// // // //   Text,

// // // //   TouchableOpacity,

// // // //   View,
// // // //   Button,
// // // //   Dimensions,
// // // //   ScrollView,

// // // // } from 'react-native';
// // // // // import ImagePicker from 'react-native-image-picker';
// // // // // import firebase from 'react-native-firebase';
// // // // import * as Progress from 'react-native-progress';
// // // // const {width,height} = Dimensions.get('window');
// // // // import ImagePicker from 'react-native-image-crop-picker';
// // // // import firebase from 'firebase';
// // // //   // };

// // // // //   const  Firebase= firebase.initializeApp(firebaseConfig)
// // // // //  const  storage = firebase.storage()            

// // // // // export default storage ;
// // // // const config = {
// // // //   // const firebaseConfig = {
// // // //     apiKey: "AIzaSyBGeP5el8S6yCqYfjHqttm-MvdlF_HhJ9c",
// // // //     authDomain: "tinder-db878.firebaseapp.com",
// // // //     databaseURL: "https://tinder-db878.firebaseio.com",
// // // //     projectId: "tinder-db878",
// // // //     storageBucket: "tinder-db878.appspot.com",
// // // //     messagingSenderId: "985450576342",
// // // //     appId: "1:985450576342:web:2f573cd80bf6b290accc77"
// // // // }
// // // // firebase.initializeApp(config)
// // // // const storage = firebase.storage()


// // // // export default class App extends React.Component {

// // // //   constructor(props){
// // // //     super(props);
// // // //     this.state = {
// // // //       image: null,
// // // //       images: null,
// // // //       title: ''
// // // //     }
// // // //   }

// // // //   onChangeTitle = title => {
// // // //     this.setState({ title })
// // // //   }
  
  
// // // //   selectImage = () => {
// // // //     ImagePicker.openPicker({
// // // //       multiple: true,
// // // //       waitAnimationEnd: false,
// // // //       sortOrder: 'desc',
// // // //       includeExif: true,
// // // //       forceJpg: true,
// // // //     })
// // // //       .then((images) => {
// // // //         this.setState({
// // // //           image: null,
// // // //           images: images.map((i) => {
// // // //             console.log('received image', i);
// // // //             return {
// // // //               uri: i.path,
// // // //               width: i.width,
// // // //               height: i.height,
// // // //               mime: i.mime,
// // // //             };
// // // //           }),
// // // //         });
// // // //       })
      
// // // //       .catch((e) => alert(e));
  
// // // //      }

// // // //      uploadImage = async () => {
// // // //       const { uri } = image;
// // // //       const filename = uri.substring(uri.lastIndexOf('/') + 1);
// // // //       const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
// // // //       setUploading(true);
// // // //       setTransferred(0);
// // // //       const task = storage()
// // // //         .ref(filename)
// // // //         .putFile(uploadUri);
// // // //       // set progress state
// // // //       task.on('state_changed', snapshot => {
// // // //         setTransferred(
// // // //           Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
// // // //         );
// // // //       });
// // // //       try {
// // // //         await task;
// // // //       } catch (e) {
// // // //         console.error(e);
// // // //       }
// // // //       setUploading(false);
// // // //       Alert.alert(
// // // //         'Photo uploaded!',
// // // //         'Your photo has been uploaded to Firebase Cloud Storage!'
// // // //       );
// // // //       setImage(null);
// // // //     };

// // // //      onSubmit = async () => {
// // // //       storage.ref(this.state.images).child(`${2}`)
// // // //       console.log('this.state.images')
// // // //       //  alert(this.images)
// // // //       try {
// // // //         const post = {
// // // //           photo: this.state.images,
// // // //           // title: this.state.title
// // // //         }
// // // //         firebase.storage().ref('1234/').child(this.state.images)
// // // //         // this.props.storage.uploadPost(post)
    
// // // //         this.setState({
// // // //           images: null,
// // // //           title: '',
// // // //           description: ''
// // // //         })
// // // //       } catch (e) {
// // // //         console.error(e)
// // // //       }
// // // //     }



// // // //   selectVideoTapped() {
// // // //     ImagePicker.openCamera({
// // // //       mediaType: 'video',
// // // //     }).then(image => {
// // // //       console.log(image);
// // // //     });

// // // //   }

// // // //   renderImage(image) {
// // // //     return (
// // // //       <Image
// // // //         style={{ width: 300, height: 300, resizeMode: 'contain' }}
// // // //         source={image}
// // // //       />
// // // //     );
// // // //   }

// // // //   renderAsset(image) {
// // // //     if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
// // // //       return this.renderVideo(image);
// // // //     }

// // // //     return this.renderImage(image);
// // // //   }

// // // //   render() {
// // // //     return (
// // // //       <ScrollView>
// // // //       <View style={{ flex: 1, marginTop: 60 }}>
// // // //         <View>
// // // //           {this.state.images ? this.state.images.map((i) => (
// // // //                 <View key={i.uri}>{this.renderAsset(i)}</View>
// // // //               )): (
// // // //               <TouchableOpacity
// // // //                 onPress={this.selectImage}
// // // //                 style={{
// // // //                   alignItems: 'center',
// // // //                   padding: 10,
// // // //                   margin: 30
// // // //                 }}>
// // // //                 <Text>Add an image</Text>
// // // //               </TouchableOpacity>
// // // //             )}
// // // //         </View>
// // // //         <View style={{ marginTop: 80, alignItems: 'center' }}>
// // // //           <Text category='h4'>Post Details</Text>
// // // //           <TextInput
// // // //             placeholder='Enter title of the post'
// // // //             style={{ margin: 20 }}
// // // //             value={this.state.title}
// // // //             onChangeText={title => this.onChangeTitle(title)}
// // // //           />
// // // //           <TouchableOpacity status='success' onPress={this.onSubmit}>
// // // //             <Text>Add post</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //         {/* <Image
// // // //               source={this.state.images}
// // // //               style={{ width: '100%', height: 300 }}
// // // //             /> */}

// // // //       </View>
// // // //       </ScrollView>
// // // //     )
// // // //   }
// // // // }





// // // // const styles = StyleSheet.create({

// // // //   container: {

// // // //     flex: 1,

// // // //     justifyContent: 'center',

// // // //     alignItems: 'center',

// // // //     backgroundColor: '#F5FCFF',

// // // //   },

// // // //   avatarContainer: {

// // // //     borderColor: '#9B9B9B',

// // // //     borderWidth: 1 / PixelRatio.get(),

// // // //     justifyContent: 'center',

// // // //     alignItems: 'center',

// // // //   },

// // // //   avatar: {

// // // //     borderRadius: 75,

// // // //     width: 150,

// // // //     height: 150,

// // // //   },

// // // // });