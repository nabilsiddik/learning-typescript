
   const myname: string = 'nabil'
   console.log(myname, 'nabil df')

   // Creating types

   // Object type
   export type Obj = {
      name: string;
      age: number;
      education?: {
          institution: 'University' | 'College';
          level?: string;
      };
   }

   const obj: Obj = {
      name: 'Nabil',
      age: 21,
      education: {
         institution: 'University',
         level: 'Undergrad'
      }
   }


