import { Member, Profile, Server } from "@prisma/client";

export type ServerWithMembersAndChannels = Server & {
  members: (Member & { profile: Profile })[];
};
