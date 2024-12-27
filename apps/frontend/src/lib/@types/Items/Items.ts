export interface Item {
  _id: string
  id: string
  title: string
  icon: string
  cover_image: string
  type: string
  source: string
  description: string
  cycle: {
    startsAt: Date | null
    endsAt: Date | null
  }
  dueDate: Date | null
  status: string
  spaces: string[]
  blocks: string[]
  user: string
  labels: string[]
  metadata: Metadata
  isFavorite: boolean
  isCompleted: boolean
  isArchived: boolean
  isDeleted: boolean
  uuid: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Attendee {
  email: string
  organizer?: boolean
  self?: boolean
  responseStatus: string
}

export interface EntryPoint {
  entryPointType: string
  uri: string
  label?: string
  pin?: string
  regionCode?: string
}

export interface Metadata {
  url?: string
  favicon?: string
  status: string
  attendees: Attendee[]
  hangoutLink: string
  start: {
    dateTime: string
    timeZone: string
  }
  end: {
    dateTime: string
    timeZone: string
  }
  creator: {
    email: string
    self: boolean
  }
  conferenceData: {
    entryPoints: EntryPoint[]
    conferenceSolution: {
      key: {
        type: string
      }
      name: string
      iconUri: string
    }
    conferenceId: string
  }
}

export interface ItemResponse {
  items: Item[]
}

export interface ItemCreateResponse {
  response: Item
}

export interface SearchResponse {
  response: Item[]
}

export interface ItemStoreType {
  items: Item[]
  selectedItem: Item | null
  setSelectedItem: (selectedItem: Item | null) => void
  isFetched: boolean
  setIsFetched: (isFetched: boolean) => void
  fetchItems: (session: string, filter: string) => Promise<void>
  setItems: (items: Item[]) => void
  addItem: (
    session: string,
    dueDate: string,
    title: string,
    status: string,
    description?: string
  ) => Promise<void>
  updateItemStatus: (itemId: string, newStatus: string) => void
  mutateItem: (
    session: string,
    itemId: string,
    status: string,
    title?: string,
    description?: string,
    isDeleted?: boolean
  ) => Promise<void>
  updateItem: (session: string, editedItem: Item, id: string) => void
}

export interface MutateItem {
  id: string
  data: Partial<Item>
}

export interface WebSocketMessage {
  type: "linear" | string
  action: "create" | "update" | "delete" | "unassigned"
  item: Item
}
