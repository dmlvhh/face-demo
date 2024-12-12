import { createApp } from 'vue'
import App from './App.vue';
import { Button } from 'vant';
import { NoticeBar } from 'vant';
import { Swipe, SwipeItem } from 'vant'
import { Circle } from 'vant';
import { ActionSheet } from 'vant';
import { Toast } from 'vant';
import { Dialog } from 'vant';
import 'vant/lib/index.css';
import  "./style.css"
import * as tf from '@tensorflow/tfjs';
import { FaceMesh } from '@mediapipe/face_mesh';
// import { FaceLandmarksDetection } from '@tensorflow-models/face-landmarks-detection';

const app = createApp(App);
app.use(Button).use(NoticeBar).use(Swipe).use(SwipeItem).use(Circle).use(ActionSheet).use(Toast).use(Dialog);
app.mount('#app');