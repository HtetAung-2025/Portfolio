import React from 'react'
import { Download, Code2, Sparkles } from 'lucide-react'
import {SiReact,SiNextdotjs,SiTailwindcss,SiNodedotjs,SiMongodb, SiTypescript} from 'react-icons/si'
import { PERSONAL_INFO} from '../../utils/constants'
import FadeIn from '../animations/FadeIn'
import RedialGradientBackground from '../backgrounds/RedialGradientBackground'
function About() {
    //Skills
    const skills=[
        {name:'React.js',icon:SiReact,color:'#61DAFB'},
        {name:'Next.js',icon:SiNextdotjs,color:'#000000'},
        {name:'TypeScript',icon:SiTypescript,color:'#3178c6'},
        {name:'Tailwind CSS',icon:SiTailwindcss,color:'#06b6d4'},
        {name:'Node.js',icon:SiNodedotjs,color:'#339933'},
        {name:'MongoDb',icon:SiMongodb,color:'#47A148'},
    ];
  return (
    <section id="about" className="relative py-10 bg-black overflow-hidden">
        <RedialGradientBackground variant='about'/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/**main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
                {/**Left column content */}
                <div className="flex flex-col gap-12 ">
                    <div className="flex flex-col gap-8 ">
                        <FadeIn delay={60}>
                            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border-primary/30 bg-primary/10 rounded-full w-fill">
                                <Code2 className="w-4 h-4 text-primary"/>
                                <span className="text-sm text-primary font-medium">
                                    Frontend Engineer | UI developer
                                </span>
                                <Sparkles className="w-4 h-4 text-primary"/>
                            </div>
                        </FadeIn>
                        <FadeIn delay={100}>
                        <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                            About Me
                        </h2>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <div className="flex flex-col gap-4">
                                {PERSONAL_INFO.bio.map((paragraph,index)=>(
                                        <p key={index} className="text-base text-white/70 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                    
                    
                </div>
                {/**right Column Info Grid */}
                <FadeIn delay={200}>
                    <div className="grid grid-cols-2 gap-4 max-w-full max-sm:hidden">
                        <div className="col-span-2 relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative bg-white/5  border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <Code2 className="w-6 h-6 tert-primary"/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2">専門的な技術力</h3>
                                        <p className="text-sm text-white/70 leading-relaxed">HTML、CSS、JavaScriptの基礎を徹底的に学んだ上で、現在はReactやTailwind CSSを用いたモダンな開発に挑戦しています。新しい技術を迅速に吸収し、実務レベルのサイト制作へ落とし込むスピード感を大切にしています。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white/5  border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Sparkles className="w-5 h-5 text-primary"/>
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">設計・品質へのこだわり</h3>
                                    <p className="text-sm text-white/70 leading-relaxed">基礎であるWeb標準（HTML/CSS）を疎かにせず、セマンティックなコードを書くことを心がけています。その上で、Tailwind CSSなどを活用し、効率的かつ一貫性のあるスタイリングと、保守性の高いコンポーネント設計を追求しています。l</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative bg-white/5  border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                    <Download className="w-5 h-5 text-primary"/>
                                </div>
                                <h3 className="text-base font-semibold text-white mb-2">最適化・快適さ</h3>
                                <p className="text-sm text-white/70 leading-relaxed">常に「より最適な実装方法」を模索しています。Reactでのコンポーネント共通化や最新のビルドツールの活用など、新しい技術を学ぶことで、ユーザーにとってより快適で高速なWeb体験を提供することを目指しています。</p>
                            </div>
                        </div>
                        
                    </div>
                </FadeIn>
            </div>
            {/**Skills grid section */}
            
        </div>
    </section>
  )
}

export default About
