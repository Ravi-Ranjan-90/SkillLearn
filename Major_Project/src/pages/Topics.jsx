import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Topics(){

 const { subjectId } = useParams();

 const [topics,setTopics] = useState([]);

 useEffect(()=>{

 fetch(`http://localhost:5000/api/topics/${subjectId}`)
 .then(res=>res.json())
 .then(data=>setTopics(data))

 },[subjectId]);

 return(

 <div className="p-10">

 <h1 className="text-2xl font-bold mb-6">
 Topics
 </h1>

 {topics.map(topic=>(
   
   <div key={topic._id} className="border p-4 mb-4">

   <h2 className="text-lg font-semibold">
   {topic.name}
   </h2>

   <div className="mt-3 space-x-4">

   <Link
   to={`/test/${topic._id}/1`}
   className="bg-blue-500 text-white px-4 py-1"
   >
   Level 1
   </Link>

   <Link
   to={`/test/${topic._id}/2`}
   className="bg-yellow-500 text-white px-4 py-1"
   >
   Level 2
   </Link>

   <Link
   to={`/test/${topic._id}/3`}
   className="bg-red-500 text-white px-4 py-1"
   >
   Level 3
   </Link>

   </div>

   </div>

 ))}

 </div>

 )

}

export default Topics;

// import { BookOpen, Database, Cpu, Network, ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

//       <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <BookOpen className="w-6 h-6 text-blue-400" />
//             <span className="text-xl font-bold">PlacementPrep</span>
//           </div>
//           <div className="flex gap-4">
//             <button className="px-6 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
//               Login
//             </button>
//             <button className="px-6 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-105">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </nav>

//       <section className="relative pt-32 pb-20 px-6 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10"></div>
//         <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>

//         <div className="relative max-w-7xl mx-auto text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/30 rounded-full mb-6">
//             <span className="text-sm font-medium text-blue-400">Trusted by 10,000+ students</span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
//             Master Computer Science
//             <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               For Placements
//             </span>
//           </h1>

//           <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
//             Learn Data Structures, Operating Systems, DBMS and more with structured topics and placement-level questions
//           </p>

//           <div className="flex gap-4 flex-wrap justify-center">
//             <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/30">
//               Start Learning Free
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="flex items-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 px-8 py-4 rounded-lg font-semibold transition-all">
//               View Demo
//             </button>
//           </div>

//           <div className="flex items-center justify-center gap-8 mt-16 text-sm text-slate-400">
//             <div className="flex items-center gap-2">
//               <CheckCircle className="w-5 h-5 text-green-500" />
//               <span>No credit card required</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckCircle className="w-5 h-5 text-green-500" />
//               <span>Free forever</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Core Subjects for Placements</h2>
//             <p className="text-slate-400 text-lg">Everything you need to ace technical interviews</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-600/50 transition-all hover:scale-105">
//               <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
//                 <BookOpen className="w-7 h-7 text-blue-400" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Data Structures</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-4">
//                 Master arrays, linked lists, stacks, queues, trees, graphs and advanced data structures
//               </p>
//               <div className="flex items-center gap-2 text-sm text-blue-400 font-medium">
//                 <span>150+ Questions</span>
//               </div>
//             </div>

//             <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-600/50 transition-all hover:scale-105">
//               <div className="w-14 h-14 bg-cyan-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600/20 transition-colors">
//                 <Cpu className="w-7 h-7 text-cyan-400" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Operating Systems</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-4">
//                 Deep dive into processes, threads, scheduling, deadlocks, and memory management
//               </p>
//               <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
//                 <span>120+ Questions</span>
//               </div>
//             </div>

//             <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-600/50 transition-all hover:scale-105">
//               <div className="w-14 h-14 bg-emerald-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600/20 transition-colors">
//                 <Database className="w-7 h-7 text-emerald-400" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">DBMS</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-4">
//                 SQL queries, transactions, normalization, indexing and database optimization
//               </p>
//               <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
//                 <span>100+ Questions</span>
//               </div>
//             </div>

//             <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-orange-600/50 transition-all hover:scale-105">
//               <div className="w-14 h-14 bg-orange-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600/20 transition-colors">
//                 <Network className="w-7 h-7 text-orange-400" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Computer Networks</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-4">
//                 TCP/IP, OSI model, routing protocols and network security fundamentals
//               </p>
//               <div className="flex items-center gap-2 text-sm text-orange-400 font-medium">
//                 <span>90+ Questions</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-6 bg-slate-900/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">How It Works</h2>
//             <p className="text-slate-400 text-lg">Get started in minutes</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="relative">
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-600/30">
//                   1
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">Create Account</h3>
//                 <p className="text-slate-400 leading-relaxed">
//                   Sign up with your email and create your personalized learning profile in seconds
//                 </p>
//               </div>
//               <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
//             </div>

//             <div className="relative">
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-600/30">
//                   2
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">Choose Topics</h3>
//                 <p className="text-slate-400 leading-relaxed">
//                   Select from DSA, DBMS, OS, Networks and start practicing with curated questions
//                 </p>
//               </div>
//               <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
//             </div>

//             <div className="flex flex-col items-center text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-600/30">
//                 3
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
//               <p className="text-slate-400 leading-relaxed">
//                 Monitor your solved questions, track weak areas and improve daily with analytics
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-6">
//         <div className="max-w-5xl mx-auto">
//           <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
//             <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
//             <div className="relative">
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Ready to Crack Your Placements?
//               </h2>
//               <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
//                 Join thousands of students preparing for technical interviews with our comprehensive platform
//               </p>

//               <button className="group bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:scale-105 transition-all shadow-xl inline-flex items-center gap-2">
//                 Create Free Account
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>

//               <div className="flex items-center justify-center gap-12 mt-12 text-white/90">
//                 <div className="flex items-center gap-2">
//                   <Users className="w-5 h-5" />
//                   <span className="font-semibold">10,000+ Students</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <TrendingUp className="w-5 h-5" />
//                   <span className="font-semibold">460+ Questions</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="border-t border-slate-800 py-8 px-6">
//         <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
//           <p>&copy; 2024 PlacementPrep. All rights reserved.</p>
//         </div>
//       </footer>

//     </div>
//   );
// }

// export default App;
