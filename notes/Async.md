## JavaScript async 

- async tasks are given to another threads other than main thread where js is executing tasks one by one
- these threads can be provided by browsers e.g network thread etc
- then js continues to execute synchronous tasks until and unless all this sync code is finised if the async task has been completed 
    this task remains in call back queue which is monitored by event loop 
- even