"use client"

import React, { useEffect } from "react"
import Integrations from "@/src/components/profile/Integrations"
import UserInfo from "@/src/components/profile/UserInfo"
import { useAuth } from "@/src/contexts/AuthContext"
import useUserStore from "@/src/lib/store/user.store"


const ProfilePage: React.FC = () => {
  const { session } = useAuth()
  const { user, isLoading, error, fetchUser } = useUserStore()

  useEffect(() => {
    if (session) {
      fetchUser(session)
    }
  }, [session, fetchUser])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div className="text-red-500">{error}</div>
  if (!user) return <div>User not found</div>
   return (
    <section className="ml-48 mt-20 bg-background text-gray-color">
      <div className="flex flex-col items-start">
        <div className="max-w-6xl">
          <div className="space-y-2">
            <h1 className="text-[30px] font-medium text-white">Profile</h1>
            <p className="font-medium">manage your profile and integrations.</p>
            <div
              style={{ borderBottomColor: "rgba(38, 38, 38, 0.8)" }}
              className=" w-full border-b"
            ></div>
          </div>
          <div className="space-y-4 ">
            <h1 className="mt-8 text-xl font-medium text-white">Photo</h1>
            <ProfilePicture />
            <p className="font-medium">
              update photo. recommended size is 256x256 px.
            </p>
            <div
              style={{ borderBottomColor: "rgba(38, 38, 38, 0.8)" }}
              className=" w-full border-b border-gray-color "
            ></div>
          </div>
          <div className="space-y-4">
            <div className="my-8">
              <InfoBox />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div
            style={{ borderBottomColor: "rgba(38, 38, 38, 0.8)" }}
            className="border-b border-gray-color"
          ></div>
          <h1 className="mt-8 text-xl font-medium text-white">
            Personal Integrations
          </h1>
          <IntegrationList />
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
