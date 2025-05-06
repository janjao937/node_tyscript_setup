# TypeScript Setup Guide
เอกสารนี้ให้แนวทางการติดตั้งและใช้งาน TypeScript สำหรับโปรเจกต์ Node.js ของคุณ พร้อมแนะนำแพ็กเกจเสริมที่ช่วยให้พัฒนางานได้สะดวกขึ้น

## การติดตั้ง TypeScript แบบ Global
npm install --global typescript

### แนะนำการติดตั้งเพิ่มเติม
npm install --global typescript ts-node ts-node-dev
- typescript → คอมไพล์ TypeScript เป็น JavaScript
- ts-node → รันไฟล์ TypeScript โดยตรงโดยไม่ต้องคอมไพล์ก่อน
- ts-node-dev → รันแบบ auto-restart เมื่อมีการเปลี่ยนแปลงไฟล์ (คล้ายกับ nodemon)

### ตรวจสอบว่าแพ็กเกจถูกติดตั้งแบบ Global
npm list -g --depth=0

## การตรวจสอบการติดตั้ง
tsc -v

## ติดตั้ง TypeScript เวอร์ชันเฉพาะ
npm install --global typescript@4.x.x

## การถอนการติดตั้ง TypeScript
npm uninstall --global typescript

## การตั้งค่าเริ่มต้นของ TypeScript
tsc --init

## ติดตั้งแพ็กเกจที่เกี่ยวข้องกับ TypeScript
npm i express 
npm i @types/express --dev
npm i axios
npm i @types/axios --dev

## การคอมไพล์ TypeScript
tsc server.ts
node server.js

## คอมไพล์และรันไฟล์ TypeScript พร้อมกัน
ts-node server.ts

## รันเซิร์ฟเวอร์แบบ background (คล้ายกับ nodemon)
ts-node-dev src/server.ts

## License
MIT
