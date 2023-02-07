const nodemailer = require("nodemailer");
async function main() {

    try {
        const linter_job = process.argv[5] == '0' ? 'OK' : 'ERROR';
        const test_job = process.argv[6] == '0' ? 'OK' : 'ERROR';
        const update_job = process.argv[7] == '0' ? 'OK' : 'ERROR';
        const deploy_job = process.argv[8] == '0' ? 'OK' : 'ERROR';

        const mailtrap_user = process.argv[2];
        const mailtrap_pass = process.argv[3];
        const DESTINATARIO = process.argv[4];

        const ASUNTO = 'Resultado de la pipeline ejecutada';
        const BODY = `
        <div>
        <p>Se ha ejecutado la pipeline de jenkins con los siguientes resultados:</p>
    
        <ul>
            <li>
            Linter_stage: ${linter_job}
            </li>
            <li>
            Test_stage: ${test_job}
            </li>
            <li>
            Update_readme_stage: ${update_job}
            </li>
            <li>
            Deploy_to_Vercel_stage: ${deploy_job}
            </li>
        </ul>
    </div>`;

        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: mailtrap_user,
                pass: mailtrap_pass
            }
        });

        const email = {
            from: '"Sergi Micó" <sergimicoortiz@gmail>',
            to: DESTINATARIO,
            subject: ASUNTO,
            html: BODY,
        }

        const send_email = await transporter.sendMail(email);
        console.log("Message sent: %s", send_email.messageId);
        process.exit(0);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

main();