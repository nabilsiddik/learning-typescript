
   const myname: string = 'nabil'
   console.log(myname, 'nabil df')

   export type Obj = {
      name: string;
      age: number;
      education?: {
          institution: string;
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


