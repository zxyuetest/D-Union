import React from 'react';
import { motion } from 'motion/react';
import { Compass, Newspaper, Users, Heart, PlayCircle, ChevronRight, MessageSquare } from 'lucide-react';

export default function Discover({ onNavigate }: { onNavigate: (view: string) => void }) {
  const news = [
    { id: 1, title: '2026年度市总工会“春送岗位”大型招聘会圆满落幕', date: '2026-03-15', views: 1250, img: 'https://picsum.photos/seed/news1/400/200' },
    { id: 2, title: '关于开展职工医疗互助保障活动的最新通知', date: '2026-03-14', views: 3420, img: 'https://picsum.photos/seed/news2/400/200' },
  ];

  const moments = [
    { id: 1, user: '李华', avatar: 'https://picsum.photos/seed/user1/100/100', content: '周末参加了工会组织的徒步活动，认识了很多新朋友，风景也很美！', img: 'https://picsum.photos/seed/moment1/400/300', likes: 45, comments: 12 },
    { id: 2, user: '王建国', avatar: 'https://picsum.photos/seed/user2/100/100', content: '今天在职工书屋借到了心仪已久的书，环境真不错。', img: null, likes: 23, comments: 5 },
  ];

  return (
    <div className="flex flex-col flex-1 relative overflow-hidden">
      {/* Header */}
      <header className="bg-white text-gray-800 p-4 sticky top-0 z-20 flex justify-center items-center shadow-sm">
        <h1 className="text-lg font-bold flex items-center">
          <Compass className="w-5 h-5 mr-1.5 text-red-600" /> 发现
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-24 space-y-6">
        {/* Quick Links */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: Newspaper, label: '工会资讯', color: 'text-blue-500', bg: 'bg-blue-50' },
            { icon: Users, label: '职工风采', color: 'text-green-500', bg: 'bg-green-50' },
            { icon: Heart, label: '互助圈子', color: 'text-pink-500', bg: 'bg-pink-50' },
            { icon: PlayCircle, label: '视频专区', color: 'text-purple-500', bg: 'bg-purple-50' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center justify-center space-y-2 cursor-pointer active:scale-95 transition-transform">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <span className="text-xs font-medium text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Latest News */}
        <div>
          <div className="flex justify-between items-end px-1 mb-3">
            <h3 className="font-bold text-gray-800 text-base">工会头条</h3>
            <button className="text-xs text-gray-500 flex items-center hover:text-red-600 transition-colors">
              更多 <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-3">
            {news.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer active:bg-gray-50">
                <img src={item.img} alt={item.title} className="w-full h-32 object-cover" referrerPolicy="no-referrer" />
                <div className="p-3">
                  <h4 className="font-medium text-gray-800 text-sm leading-snug line-clamp-2">{item.title}</h4>
                  <div className="flex justify-between items-center mt-2 text-[10px] text-gray-400">
                    <span>{item.date}</span>
                    <span>{item.views} 阅读</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Moments */}
        <div>
          <div className="flex justify-between items-end px-1 mb-3">
            <h3 className="font-bold text-gray-800 text-base">互助圈子</h3>
            <button className="text-xs text-gray-500 flex items-center hover:text-red-600 transition-colors">
              更多 <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-4">
            {moments.map((moment, i) => (
              <motion.div key={moment.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-3">
                  <img src={moment.avatar} alt={moment.user} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{moment.user}</h4>
                    <p className="text-[10px] text-gray-400">刚刚</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{moment.content}</p>
                {moment.img && (
                  <img src={moment.img} alt="Moment" className="w-full h-40 object-cover rounded-xl mb-3" referrerPolicy="no-referrer" />
                )}
                <div className="flex items-center space-x-6 text-gray-400 border-t border-gray-50 pt-3">
                  <button className="flex items-center text-xs hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4 mr-1.5" /> {moment.likes}
                  </button>
                  <button className="flex items-center text-xs hover:text-blue-500 transition-colors">
                    <MessageSquare className="w-4 h-4 mr-1.5" /> {moment.comments}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
