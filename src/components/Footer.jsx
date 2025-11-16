export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold">Voyage</h3>
            <p className="mt-2 text-sm">Design-forward travel planning for modern explorers.</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Resources</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Get updates</h4>
            <p className="mt-2 text-sm">Join our monthly dispatch with fresh places and tips.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-xl bg-white/10 ring-1 ring-white/20 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none" />
              <button className="rounded-xl bg-white text-gray-900 px-4 font-medium">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs flex items-center justify-between">
          <p>© {new Date().getFullYear()} Voyage Travel Co. All rights reserved.</p>
          <p>Made with love for curious travelers.</p>
        </div>
      </div>
    </footer>
  )
}
