import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, MapPin, Clock, Users } from 'lucide-react';

export default function Activities({ onBack }: { onBack: () => void }) {
  const [tab, setTab] = useState('all');
  
  const activities = [
    { id: 1, title: '2026春季员工徒步大会', date: '2026-03-20 09:00', location: '奥林匹克森林公园', status: '报名中', participants: '128/200', img: 'https://picsum.photos/seed/hike/400/200' },
    { id: 2, title: '青年员工心理健康讲座', date: '2026-03-25 14:00', location: '公司A座3层报告厅', status: '预告', participants: '45/100', img: 'https://picsum.photos/seed/lecture/400/200' },
    { id: 3, title: '工会杯篮球联赛开幕式', date: '2026-04-01 18:00', location: '市体育中心篮球馆', status: '筹备中', participants: '8/16队', img: 'https://picsum.photos/seed/basketball/400/200' },
    { id: 4, title: '三八妇女节插花艺术体验', date: '2026-03-08 14:00', location: '员工活动中心', status: '已结束', participants: '50/50', img: 'https://picsum.photos/seed/flower/400/200' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <header className="bg-white text-gray-800 p-4 sticky top-0 z-20 flex items-center shadow-sm">
        <button onClick={onBack} className="p-1 -ml-1 mr-2 active:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center mr-8">工会活动</h1>
      </header>
      
      <div className="bg-white border-b border-gray-200 flex px-4 sticky top-[60px] z-10">
        {['全部', '报名中', '已结束'].map((t, i) => {
          const keys = ['all', 'active', 'ended'];
          const key = keys[i];
          return (
            <button key={key} onClick={() => setTab(key)} className={`flex-1 py-3 text-sm font-medium relative ${tab === key ? 'text-red-600' : 'text-gray-500'}`}>
              {t}
              {tab === key && <motion.div layoutId="act-tab" className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-red-600 rounded-t-full" />}
            </button>
          );
        })}
      </div>

      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {activities.map((act, i) => (
          <motion.div key={act.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="h-32 w-full relative">
              <img src={act.img} alt={act.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-gray-800 shadow-sm">
                {act.status}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 text-base mb-2">{act.title}</h3>
              <div className="space-y-1.5">
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> {act.date}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> {act.location}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Users className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> 已报名: {act.participants}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
