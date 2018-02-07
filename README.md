<p align=center>
  <img src='assets/logo.png'/>
</p>

______


Easy-to-use, performant render props (function as child) components for
common needs

https://www.npmjs.com/org/render-props

## Packages

**Throttle** [**`@render-props/throttle`**](./packages/throttle)

A component for throttling state changes with requestAnimationFrame

_____

**Debounce** [**`@render-props/debounce`**](./packages/debounce)

A component for debouncing state changes with lodash's debounce function

_____

**Value** [**`@render-props/value`**](./packages/value)

A component with a simple interface for setting, clearing and resetting values
in a controlled or uncontrolled setting.

_____

**Events** [**`@render-props/events`**](./packages/events)

A component with a simple interface for managing events registered by its child
components. This component will automatically 'clean up' listeners when it
unmounts.

_____

**Rect** [**`@render-props/rect`**](./packages/rect)

A component with a simple interface for retrieving the `DOMRect` of an element.

_____

**SizeObserver** [**`@render-props/size-observer`**](./packages/size-observer)

A component which provides a simple interface for constantly querying for
changes to the size of the referenced element in its child function.

_____

**Toggle** [**`@render-props/toggle`**](./packages/toggle)

A component with a simple interface for toggling values between on/off states
in a controlled or uncontrolled setting.

_____

**Click** [**`@render-props/click`**](./packages/click)

A component with a simple interface for targeting specific types of click events
(e.g. double-click) and extracting rich stats about click position within the
client, window, etc. making it perfect for UX analytics work and in-browser
gaming.

_____

**Hover** [**`@render-props/hover`**](./packages/hover)

A component with a simple interface for listening to hover events on child
components. The state of this component will only update if the device being
used supports hover according to `!(window.matchMedia('(hover: none)').matches)`

_____

**MousePosition** [**`@render-props/mouse-position`**](./packages/mouse-position)

A component with a simple and performant interface for tracking
the position of the mouse as it moves around the screen - perfect for UX
analytic tracking and also in-browser gaming.

_____

**Counter** [**`@render-props/counter`**](./packages/counter)

A component with a simple interface for bound-value counting.

_____

**Viewport** [**`@render-props/viewport`**](./packages/viewport)

Multiple components for listening and responding to viewport events in a
scalable fashion.

_____

**Scrollable** [**`@render-props/scrollable`**](./packages/scrollable)

A component with a simple interface for listening to the scroll
event of its child component and providing valuable data about direction, distance,
and more. It also provides convenience functions for scrollTo with optional animation.

_____

**ImageProps** [**`@render-props/image-props`**](./packages/image-props)

A component with a simple interface for getting the natural size,
rendered size and orientation from `<img>` elements after they have loaded
successfully.

_____

**Point** [**`@render-props/point`**](./packages/point)

A component with a simple interface for setting and moving coordinate `{x, y}`
values.

_____

**Subscriptions** [**`@render-props/subscriptions`**](./packages/subscriptions)

A component for communicating changes to the state of one component to
another component(s). This was much more useful before the React.createContext
API in React 16.3 for ensuring context updates reached their consumers.

_____

**WillChange** [**`@render-props/will-change`**](./packages/will-change)

A component with a simple interface for applying CSS `will-change`
styles to its child components when given events fire. This is incredibly useful
because browsers recommend that you use this CSS property sparingly, as it's
a GPU-hog. You should really only be applying it *directly before* the event
occurs.
