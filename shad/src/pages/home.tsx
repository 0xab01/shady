import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Tab = ({ onTabSelect }) => {
  return (
    <Tabs defaultValue="Generate" className="flex items-normal justify-center" onValueChange={onTabSelect}>
      <TabsList>
        <TabsTrigger value="Generate">Generate</TabsTrigger>
        <TabsTrigger value="Train Voice">Train Voice</TabsTrigger>
        <TabsTrigger value="Account">Account</TabsTrigger>
      </TabsList>
      <TabsContent value="Generate"></TabsContent>
      <TabsContent value="Train Voice"></TabsContent>
      <TabsContent value="Account"></TabsContent>
    </Tabs>
  )
}

export default Tab;