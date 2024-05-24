import { v4 } from "uuid";
import { storage } from "../../App";
import { colRef } from "../../App";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, onSnapshot, query, where } from "firebase/firestore";
 export const HandleLoan = ()=>{





    
    const loanRequest = async(detailValue, guarantorValue, verifyValue)=>{
        const { applicant, applicantHomeAddy, applicantOfficeAddy, applicantTrade, phone, email, repayment, appPassport, loan} = detailValue;
        const {guarantor, guarantorAddy, guarantorPassport, guarantorPhone} = guarantorValue;
        const {document} = verifyValue;
        const applicantImage = `images/${appPassport.file.name + v4()}`;
        const guarantorImage = `images/${guarantorPassport.file.name + v4()}`;
        const verification = `images/${document.file.name + v4()}`;

        // const q = query(colRef, where('phone', '==', phone));

        // onSnapshot(q, (snapshot)=>{
        // const data = [];
        // const dataRef = snapshot.docs.forEach(doc=>{
        //     data.push({...doc.data(), id:doc.id})
        // });
        // console.log(data);
        // })

        try{
            const appRef = ref(storage, applicantImage)
            const appSnapshot = await uploadBytes(appRef, appPassport.file.originFileObj);
            const applicantUrl = await getDownloadURL(appSnapshot.ref)


            const guaRef = ref(storage, guarantorImage)
            const guaSnapshot = await uploadBytes(guaRef, guarantorPassport.file.originFileObj);
            const guarantorUrl = await getDownloadURL(guaSnapshot.ref);

            const verifyRef = ref(storage, verification)
            const verifySnapshot = await uploadBytes(verifyRef, document.file.originFileObj);
            const verifyUrl = await getDownloadURL(verifySnapshot.ref);


            await addDoc(colRef, {
                date: JSON.stringify(new Date()),
                email:email,
                name: applicant,
                homeAddress: applicantHomeAddy,
                office: applicantOfficeAddy,
                phone: phone,
                trade: applicantTrade,
                loanAmount: loan,
                repaymentDate: repayment.toString(),
                passport:applicantUrl,
                guarantor:{
                    name: guarantor,
                    address: guarantorAddy,
                    passport: guarantorUrl,
                    guarantorPath: guarantorImage,
                    guarantorPhone: guarantorPhone
                   
                },
                verification:verifyUrl,
                status:'Action required',
                applicantPath: applicantImage,
                verificationPath:verification
                


     
                
            })

            console.log(appPassport)

            
        }catch(error){
            console.log(error)
        }
    }
    return{ loanRequest}
}