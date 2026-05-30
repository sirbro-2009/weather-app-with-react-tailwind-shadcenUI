import { Card, CardContent } from "@/components/ui/card"
import { getTime } from "@/function";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer(){
const {year} = getTime()
return(<footer className="w-full px-4 max-w-screen  mx-auto my-6 relative z-10">
      <Card className="bg-black/40 backdrop-blur-md border-white/10 text-white">
        <CardContent className="py-4 self-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div className="text-center">
            <span className="font-bold text-white font-['Rubik']">Weather State</span> — معلومات الطقس الحية.
            <br />
            <span>{year}©</span>
          </div>
          <div className="flex gap-4 text-xs">
            <a href="https://github.com/sirbro-2009" className="hover:text-white transition-colors"><FaGithub className="w-5 h-5"></FaGithub></a>
            <a href="https://linkedin.com/in/zernikh-mouhamed-8a91a4408" className="hover:text-white transition-colors"><FaLinkedin className="w-5 h-5"></FaLinkedin></a>
          </div>
        </CardContent>
      </Card>
    </footer>)
}