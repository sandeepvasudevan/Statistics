class Cylinder{
   

    getVolume(height,radius){
        let volOfCylinder=(22/7)*(radius*2)*height;
        console.log('Volume of Cylinder for height %i & radius %i is ',height,radius,volOfCylinder.toFixed(4),'cubic units');
        return volOfCylinder;
    }

   
}
let vol=new Cylinder();
vol.getVolume(7,10);

class Cone{
   

    getVolume(height,radius){
        let volOfCone=(1/3)*(22/7)*(radius*2)*height;
        console.log('Volume of Cone for height %i & radius %i is ',height,radius,volOfCone.toFixed(4),'cubic units');
        return volOfCone;
    }

   
}
let vol1=new Cone();
vol1.getVolume(7,10);

class Sphere{
   

    getVolume(radius){
        let volOfSphere=(4/3)*(22/7)*(radius*3);
        console.log('Volume of Sphere for radius %i is ',radius,volOfSphere.toFixed(4),' cubic units');
        return volOfSphere;
    }

   
}
let vol2=new Sphere();
vol2.getVolume(7);