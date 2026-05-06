export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-4">

      {/* Trends */}
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <h3 className="font-semibold mb-2 text-sm">Trends</h3>
        <ul className="text-sm space-y-2">
          <li>#NextJS</li>
          <li>#React</li>
          <li>#WebDevelopment</li>
          <li>#AI</li>
        </ul>
      </div>

      {/* Suggestions */}
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <h3 className="font-semibold mb-2 text-sm">Who to follow</h3>
        <ul className="text-sm space-y-2">
          <li>Jane Smith</li>
          <li>Alex Johnson</li>
          <li>Michael Lee</li>
        </ul>
      </div>

    </div>
  );
}