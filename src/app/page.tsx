'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bell, Calendar, Users, Briefcase } from 'lucide-react'

export default function Home() {
  const [stats] = useState([
    { label: 'Collaborateurs', value: '55', icon: Users, trend: '+2' },
    { label: 'Agences', value: '8', icon: Briefcase, trend: '+1' },
    { label: 'Événements', value: '3', icon: Calendar, trend: 'new' },
  ])

  return (
    <div className="p-8">
      {/* En-tête */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tableau de bord</h1>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-full">
                  <Icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
              </div>
              {stat.trend && (
                <div className="mt-4">
                  <span className="text-sm text-green-500">
                    {stat.trend}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                    ce mois
                  </span>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Section Actualités */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Actualités récentes
        </h2>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Titre de l'actualité {i + 1}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Description courte de l'actualité...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
